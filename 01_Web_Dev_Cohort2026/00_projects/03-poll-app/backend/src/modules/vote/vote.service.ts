import { db } from "../../common/config/db.js";
import { voteTable } from "../../db/schema/vote.js";
import { optionTable } from "../../db/schema/option.js";
import { eq } from "drizzle-orm";

export class VoteService {

  static async createVote(optionId: string) {
   
    const option = await db.query.optionTable.findFirst({
      where: eq(optionTable.id, optionId),
    });

    if (!option) {
      throw new Error("Option not found");
    }

   
    const [vote] = await db.insert(voteTable)
      .values({
        optionId,
      })
      .returning();

    return vote;
  }

  static async getVotesByPoll(pollId: string) {
    // aggregate votes per option
    const results = await db.query.optionTable.findMany({
      where: eq(optionTable.pollId, pollId),
      with: {
        votes: true,
      },
    });

    return results.map((opt) => ({
      optionId: opt.id,
      text: opt.text,
      votesCount: opt.votes.length,
    }));
  }
}