import { Request, Response, NextFunction } from "express";
import { VoteService } from "./vote.service.js";
import { ApiResponse } from "../../common/utils/api-response.js";

interface VoteBody {
  optionId: string;
}

interface PollParams {
  pollId: string;
}

export class VoteController {

  static async createVote(
    req: Request<{}, {}, VoteBody>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { optionId } = req.body;

      const vote = await VoteService.createVote(optionId);

      return ApiResponse.created(res, "Vote cast successfully", vote);
    } catch (error) {
      next(error);
    }
  }

  static async getVotesByPoll(
    req: Request<PollParams>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { pollId } = req.params;

      const results = await VoteService.getVotesByPoll(pollId);

      return ApiResponse.ok(res, "Vote results fetched", results);
    } catch (error) {
      next(error);
    }
  }
}