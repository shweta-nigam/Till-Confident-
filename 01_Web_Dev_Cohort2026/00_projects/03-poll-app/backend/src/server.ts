import { createServer} from "node:http"

import { createApp } from "./app.js";
import { DBConnect } from "./common/config/db.js";
import { connectRedis} from "./common/config/redis.js"
import { initSocket} from "./common/sockets/index.js"


import dotenv from "dotenv"
dotenv.config()


const PORT = process.env.PORT ?? 8080
const uri = process.env.DATABASE_URI
const redis_uri = process.env.REDIS_URI


async function start() {
    try {
        await DBConnect(uri!)
        const app = await createApp()

        const httpServer = createServer(app)
        // attach socket.io

      await  connectRedis(redis_uri!)

      initSocket(httpServer)

        httpServer.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        })
    } catch (error) {
        console.error("Server failed to start")
        console.error(error)
        process.exit(1)
    }
}

start()