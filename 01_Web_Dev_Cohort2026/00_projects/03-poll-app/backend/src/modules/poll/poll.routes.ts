import { Router,type Router as RouterType } from "express";
import { PollController } from "./poll.controller.js";

const router: RouterType = Router();

router.post("/", PollController.createPoll);
router.get("/:pollId", PollController.getPollById);
router.delete("/:pollId", PollController.deletePoll);

export default router;