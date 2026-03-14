import http from "node:http"
import {env} from "./env.js"
import { createServerApplication } from "./app/index.js"

async function main() {
    try {
        const server = http.createServer(createServerApplication())
        const PORT: number = env.PORT ? +env.PORT : 8080

        server.listen(PORT,()=> {
            console.log(`Server is running on PORT ${PORT}`);
        })
    } catch (error) {
        console.log(`something went wrong`);
        throw error
    }
}

main()



// notes:
// 1.  const server = http.createServer(createServerApplication) ->
// - here we created server form http of node and then delegated its handler to express.js 

// 2. The main purpose of this file is to accepts a response on a particular PORT. It should not be concerned with how internally we handle request.