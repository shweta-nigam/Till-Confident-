import { pgTable, uuid, text, integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const pollTable = pgTable("polls", {
  id: uuid("id").defaultRandom().primaryKey(),
  question: text("question").notNull(),
});

export const optionTable = pgTable("options", {
  id: uuid("id").defaultRandom().primaryKey(),
  pollId: uuid("poll_id")
    .references(() => pollTable.id)
    .notNull(),
  text: text("text").notNull(),
  votes: integer("votes").default(0).notNull(),
});

export const voteTable = pgTable("votes", {
  id: uuid("id").defaultRandom().primaryKey(),
  optionId: uuid("option_id")
    .references(() => optionTable.id)
    .notNull(),
  pollId: uuid("poll_id").notNull(),
  userId: text("user_id").notNull()
});

// relations
export const pollRelations = relations(pollTable, ({ many }) => ({
  options: many(optionTable),
}));

export const optionRelations = relations(optionTable, ({ one }) => ({
  poll: one(pollTable, {
    fields: [optionTable.pollId],
    references: [pollTable.id],
  }),
}));

export const voteRelations = relations(voteTable, ({ one }) => ({
  option: one(optionTable, {
    fields: [voteTable.optionId],
    references: [optionTable.id],
  }),
}));