import { Router, type Router as RouterType } from "express";
import { VoteController } from "./vote.controller.js";

const router: RouterType = Router();

// POST /votes → cast vote
router.post("/", VoteController.createVote);

// GET /votes/:pollId → results
router.get("/:pollId", VoteController.getVotesByPoll);

export default router;