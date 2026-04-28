import { kafkaClient } from "./kafka-client.js";

async function setup() {
  const admin = kafkaClient.admin();

  console.log(`kafka Admin connection...`);
  await admin.connect();
  console.log(`kafka admin connection success`);

  await admin.createTopics({
    topics: [{ topic: "location-updates", numPartitions: 2 }],
  });

  await admin.disconnect();
}

setup();
