
import {
    uuid,
    pgTable,
    varchar,
    text,
    boolean,
    timestamp,
} from "drizzle-orm/pg-core"

export const usersTable = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),

    firstName: varchar("first_name", { length: 25 }),
    lastName: varchar("last_name", { length: 25 }),

    profileImageURL: text("profile_image_url"),

    email: varchar("email", { length: 322 }).notNull(),
    emailVerified: boolean("email_verified").default(false).notNull(),

    password: varchar("password", { length: 66 }),
    salt: text("salt"),

    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
        .defaultNow()
        .$onUpdate(() => new Date()),

})

export const applicationsTable = pgTable("applications", {
    id: uuid("id").primaryKey().defaultRandom(),

    name: varchar("name", { length: 100 }).notNull(),

    clientId: varchar("client_id", { length: 255 }).notNull().unique(),
    clientSecret: varchar("client_secret", { length: 255 }).notNull(),

    redirectUri: text("redirect_uri").notNull(),
    // redirectUris: text("redirect_uris").array().notNull(),

    createdAt: timestamp("created_at").defaultNow().notNull(),
})


// short-temp code
export const authCodesTable = pgTable("auth_codes", {
    code: varchar("code", { length: 255 }).primaryKey(),

    clientId: varchar("client_id", { length: 255 }).notNull(),
    userId: uuid("user_id").notNull(),

    expiresAt: timestamp("expires_at").notNull(),
})