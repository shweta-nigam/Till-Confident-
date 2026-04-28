import fs from "fs";
import { Kafka } from "kafkajs";

export const kafkaClient = new Kafka({
  clientId: "my-app",
  brokers: [process.env.KAFKA_BROKER],
  

  ssl: {
    rejectUnauthorized: true,
    ca: [fs.readFileSync("./certs/ca.pem", "utf-8")],
  },

  sasl: {
    mechanism: "plain",
    username: process.env.KAFKA_USERNAME,
    password: process.env.KAFKA_PASSWORD,
  },
});