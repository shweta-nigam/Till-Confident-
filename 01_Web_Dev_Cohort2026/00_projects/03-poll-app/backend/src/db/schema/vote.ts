import { pgTable, uuid } from "drizzle-orm/pg-core";
import { optionTable } from "./option.js";

export const voteTable = pgTable("votes", {
    id: uuid("id").defaultRandom().primaryKey(),

    optionId: uuid("option_id")
    .references(() => optionTable.id)
    .notNull()
})