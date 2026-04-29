import { pgTable, uuid, text} from "drizzle-orm/pg-core"
import { pollTable} from "./poll.js"
import { voteTable } from "./index.js";
import { relations } from "drizzle-orm";

export const optionTable = pgTable("options", {
    id: uuid("id").defaultRandom().primaryKey(),

    pollId: uuid("poll_id")
    .references(() => pollTable.id)
    .notNull(),

    text: text("text").notNull()
})

export const optionRelations = relations(optionTable, ({ many, one }) => ({
  votes: many(voteTable),
  poll: one(pollTable, {
    fields: [optionTable.pollId],
    references: [pollTable.id],
  }),
}));