import { pgTable, uuid, text, timestamp} from "drizzle-orm/pg-core"

export const pollTable = pgTable("polls", {
    id: uuid("id").defaultRandom().primaryKey(),
    question: text("question").notNull(),
    createdAt: timestamp("created_at").defaultNow()
})