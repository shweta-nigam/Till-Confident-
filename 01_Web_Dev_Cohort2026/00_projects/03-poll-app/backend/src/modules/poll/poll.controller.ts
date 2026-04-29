import { Request, Response, NextFunction } from "express";
import { PollService } from "./poll.service.js";
import { CreatePollInput } from "./poll.types.js";
import { ApiResponse } from "../../common/utils/api-response.js";

interface PollParams {
  pollId: string;
}

export class PollController {
    static async createPoll(req:Request<PollParams>, res: Response, next: NextFunction) {
        try {
            const input: CreatePollInput = req.body;

            const poll = await PollService.createPoll(input)

             return ApiResponse.created(res, "Poll created successfully", poll);
        } catch (error) {
            next(error)
        }
    }

      static async getPollById(req:Request<PollParams>, res: Response, next: NextFunction) {
    try {
      const { pollId } = req.params;

      const poll = await PollService.getPollById(pollId);

        return ApiResponse.ok(res, "Poll fetched successfully", poll);
    } catch (error) {
      next(error);
    }
  }

  static async deletePoll(req:Request<PollParams>, res: Response, next: NextFunction) {
    try {
      const { pollId } = req.params;

      await PollService.deletePoll(pollId);

     return ApiResponse.ok(res, "Poll deleted successfully");

    } catch (error) {
      next(error);
    }
  }
}

