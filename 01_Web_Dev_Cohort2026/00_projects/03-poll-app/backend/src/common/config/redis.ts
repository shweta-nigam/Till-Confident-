import Redis, {type Redis as RedisType} from "ioredis"

let redis: RedisType;

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