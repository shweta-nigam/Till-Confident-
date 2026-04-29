import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from "@neondatabase/serverless"
import * as schema from "../../db/schema/index.js"; 

let db: ReturnType<typeof drizzle<typeof schema>>;

export async function DBConnect(uri: string) {
    if (!uri) {
        throw new Error("db uri is not defined")
    }

    const sql = neon(uri)
     db = drizzle(sql, {schema})

    try {
        await db.execute("SELECT 1")
        console.log("✅ Database connected successfully");
        return db
    } catch (error) {
        console.error("❌ Database connection failed");
        console.error(error);
        process.exit(1)

    }
}

export { db }