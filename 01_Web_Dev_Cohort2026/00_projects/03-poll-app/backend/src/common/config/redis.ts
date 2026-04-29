import IORedis from "ioredis";

const Redis = IORedis.default;


let redis: InstanceType<typeof Redis>;

export const connectRedis = (uri: string) => {
    redis = new Redis(uri)

    redis.on("connect", ()=> {
        console.log("Redis connected")
    })

    redis.on("error", (err: Error) => {
        console.error("redis error:", err)
        
    })

    return redis
}

export const getRedis = () => {
    if(!redis) throw new Error ("Redis not initialized")
        return redis
}