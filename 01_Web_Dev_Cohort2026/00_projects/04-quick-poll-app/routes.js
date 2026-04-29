import express from "express";
import { db } from "./db.js";
import { pollTable, optionTable, voteTable } from "./schema.js";
import { eq, sql } from "drizzle-orm";

export const createRouter = (io) => {
  const router = express.Router();

  // Create poll
  router.post("/poll", async (req, res) => {
    try {
      const { question, options } = req.body;

      if (!question || !Array.isArray(options) || options.length === 0) {
        return res.status(400).json({ error: "Invalid input" });
      }

      const [poll] = await db
        .insert(pollTable)
        .values({ question })
        .returning();

      await db.insert(optionTable).values(
        options.map((opt) => ({
          pollId: poll.id,
          text: opt,
        })),
      );

      res.json({
        pollId: poll.id,
        shareUrl: `http://localhost:8080/poll.html?id=${poll.id}`,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to create poll" });
    }
  });

  // Get poll
  router.get("/poll/:id", async (req, res) => {
    try {
      const pollId = req.params.id;

      const poll = await db.query.pollTable.findFirst({
        where: (p, { eq }) => eq(p.id, pollId),
        with: { options: true },
      });

      if (!poll) {
        return res.status(404).json({ error: "Poll not found" });
      }

      res.json(poll);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch poll" });
    }
  });

  router.post("/poll/:pollId/vote", async (req, res) => {
  try {
    const { pollId } = req.params;
    const { optionId, userId } = req.body;

    if (!optionId || !userId) {
      return res.status(400).json({ error: "Missing data" });
    }

    // check if already voted
    const existingVote = await db.query.voteTable.findFirst({
      where: (v, { eq, and }) =>
        and(eq(v.pollId, pollId), eq(v.userId, userId)),
    });

    if (existingVote) {
      return res.status(400).json({ error: "Already voted" });
    }

    // insert vote
    await db.insert(voteTable).values({
      pollId,
      optionId,
      userId,
    });

    // increment vote
    await db
      .update(optionTable)
      .set({
        votes: sql`${optionTable.votes} + 1`,
      })
      .where(eq(optionTable.id, optionId));

    // fetch updated poll
    const option = await db.query.optionTable.findFirst({
      where: (o, { eq }) => eq(o.id, optionId),
      with: {
        poll: {
          with: { options: true },
        },
      },
    });

    const updatedPoll = option?.poll;

    if (updatedPoll) {
      io.to(updatedPoll.id).emit("vote_update", updatedPoll);
    }

    res.json({ success: true, poll: updatedPoll });

  } catch (err) {
    console.error("VOTE ERROR:", err); // 👈 THIS will show real issue
    res.status(500).json({ error: "Vote failed" });
  }
});

  return router;
};
