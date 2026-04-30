import "dotenv/config"
import { drizzle } from "drizzle-orm/node-postgres"
import pkg from "pg"
import * as schema from "./schema.js"

const { Pool } = pkg

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

// prevent crash
pool.on("error", (err) => {
  console.error("Unexpected DB error", err)
})

export const db = drizzle(pool, { schema })
