import http from "node:http";
import path from "node:path";

import express from "express";
import { Server } from "socket.io";
import dotenv from "dotenv";

import { kafkaClient } from "./kafka-client.js";
dotenv.config()
async function main() {
  const PORT = process.env.PORT ?? 8080;

  const app = express();
  const server = http.createServer(app);
  const io = new Server();

  const kafkaProducer = kafkaClient.producer();
  await kafkaProducer.connect();

  const kafkaConsumer = kafkaClient.consumer({
    groupId: `socket-server-${PORT}`,
  });
  await kafkaConsumer.connect();

  await kafkaConsumer.subscribe({
    topics: ["location-updates"],
    fromBeginning: true,
  });

  kafkaConsumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat }) => {
      const data = JSON.parse(message.value.toString());
      console.log(`kafkaConsumer data received`, { data });
      io.emit(`server:location:update`, {
        id: data.id,
        latitude: data.latitude,
        longitude: data.longitude,
      });

      await heartbeat();
    },
  });

  io.attach(server);

  io.on(`connection`, (socket) => {
    console.log(`[Socket:${socket.id}]: Connected success`);

    socket.on(`client:location:update`, async (locationData) => {
      const { latitude, longitude } = locationData;
      console.log(
        `[Socket]: ${socket.id}: client: location: update:`,
        locationData,
      );

      await kafkaProducer.send({
        topic: `location-updates`,
        message: [
          {
            key: socket.id,
            value: JSON.stringify({ id: socket.id, latitude, longitude }),
          },
        ],
      });
    });
  });

  app.use(express.static(path.resolve("./public")));

  app.get("/health", (req, res) => {
    return res.json({ healthy: true });
  });

  console.log("------------------------------",process.env.KAFKA_BROKER);

  server.listen(PORT, () =>
    console.log(`server is running on http://localhost:${PORT}`),
  );
}

main();
