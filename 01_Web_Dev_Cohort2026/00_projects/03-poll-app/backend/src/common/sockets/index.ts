import { Server } from "socket.io"
import { Server as HTTPServer}  from "http"

let io: Server;

export const initSocket = (server: HTTPServer) => {
    io = new Server(server, {
        cors: {
            origin: "*",
        }
    })

    io.on("connection", (socket) => {
        console.log("user connected", socket.id)

        socket.on("join_poll", (pollId) => {
            socket.join(pollId)
        })

        socket.on("disconnect", () => {
            console.log("user disconnected", socket.id)
        })

    })

    return io
}


export const getIo = () => {
    if(!io) throw new Error("socket not initialized")
        return io
}