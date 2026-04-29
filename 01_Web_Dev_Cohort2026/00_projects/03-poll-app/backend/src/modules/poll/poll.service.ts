import { pollTable } from "../../db/schema/poll.js"
import { db } from "../../common/config/db.js"
import { eq } from "drizzle-orm"
import { CreatePollInput } from "./poll.types.js"

export class PollService {

    static async createPoll(input: CreatePollInput) {
        const [poll] = await db
            .insert(pollTable)
            .values({
                question: input.question,
            })
            .returning();

        if (!poll) {
            throw new Error("Poll not found")
        }

        const pollLink = `${process.env.CLIENT_URL}/poll/${poll.id}`;

        return {
            id: poll.id,
            question: poll.question,
            createdAt: poll.createdAt,
            link: pollLink,
        };
    }

    static async getPollById(pollId: string) {

        const poll = await db.query.pollTable.findFirst({
            where: eq(pollTable.id, pollId),
            with: {
                options: true
            },

        })

        if (!poll) {
            throw new Error("Poll not found")
        }

        return poll

    }


    static async deletePoll(pollId: string) {
        await db.delete(pollTable)
            .where(eq(pollTable.id, pollId))
    }
}