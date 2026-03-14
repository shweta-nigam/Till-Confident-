// boiler plat for parsing env variables
import {preprocess, z} from "zod" 

// create env schema 
const envSchema = z.object({
    PORT: z.string().optional(),
    API_KEY:z.string(), // export API_KEY=123 - type in terminal for current session
})


// validates env variables and return it otherwise throw error
function createEnv(env: NodeJS.ProcessEnv){
    const safeParseResult = envSchema.safeParse(env);
    if(!safeParseResult.success) throw new Error(safeParseResult.error.message);
    return safeParseResult.data
}

export const env = createEnv(process.env) 


// note: 
// 1. Validating env variables:
// function createEnv(env: NodeJS.ProcessEnv)
// This function receives: process.env
// Which contains: all environment variables


// so overall projects folder follows:
//  Validates environment variables with Zod
//  Creates an Express app
//  Wraps it in a Node HTTP server
//  Starts listening on a PORT
//  Responds to / with JSON