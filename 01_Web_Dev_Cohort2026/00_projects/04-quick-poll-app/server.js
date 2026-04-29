import http from "node:http";
import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { Server } from "socket.io";

import { createRouter } from "./routes.js";
import { setupSocket } from "./socket.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.json());


app.use(express.static(path.join(__dirname, "public")));

const server = http.createServer(app);


const io = new Server(server);

setupSocket(io);

app.get("/health", (req,res) => {
  res.status(200).json({health:"ok"})
})
app.use("/api", createRouter(io));

// start server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});