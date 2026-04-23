"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authCodesTable = exports.applicationsTable = exports.usersTable = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.usersTable = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.uuid)("id").primaryKey().defaultRandom(),
    firstName: (0, pg_core_1.varchar)("first_name", { length: 25 }),
    lastName: (0, pg_core_1.varchar)("last_name", { length: 25 }),
    profileImageURL: (0, pg_core_1.text)("profile_image_url"),
    email: (0, pg_core_1.varchar)("email", { length: 322 }).notNull(),
    emailVerified: (0, pg_core_1.boolean)("email_verified").default(false).notNull(),
    password: (0, pg_core_1.varchar)("password", { length: 66 }),
    salt: (0, pg_core_1.text)("salt"),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at")
        .defaultNow()
        .$onUpdate(() => new Date()),
});
exports.applicationsTable = (0, pg_core_1.pgTable)("applications", {
    id: (0, pg_core_1.uuid)("id").primaryKey().defaultRandom(),
    name: (0, pg_core_1.varchar)("name", { length: 100 }).notNull(),
    clientId: (0, pg_core_1.varchar)("client_id", { length: 255 }).notNull().unique(),
    clientSecret: (0, pg_core_1.varchar)("client_secret", { length: 255 }).notNull(),
    redirectUri: (0, pg_core_1.text)("redirect_uri").notNull(),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull(),
});
// short-temp code
exports.authCodesTable = (0, pg_core_1.pgTable)("auth_codes", {
    code: (0, pg_core_1.varchar)("code", { length: 255 }).primaryKey(),
    clientId: (0, pg_core_1.varchar)("client_id", { length: 255 }).notNull(),
    userId: (0, pg_core_1.uuid)("user_id").notNull(),
    expiresAt: (0, pg_core_1.timestamp)("expires_at").notNull(),
});
