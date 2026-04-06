import dotenv from "dotenv";
dotenv.config(); // load env // always on top
import { app } from "./src/app";
import connectDB from "./src/common/config/db.js";

const PORT = process.env.PORT ?? 8080;

const start = async () => {
  await connectDB();

  const server = app.listen(PORT, () => {
    console.log(
      `Server is running at the ${PORT} in ${process.env.NODE_ENV} mode`,
    );
  });

  server.on("error", (err) => {
    console.error("Server failed to start", err);
    process.exit(1);
  });
};

start().catch((err) => {
  console.error("Failed to start server", err);
  process.exit(1); // gracefully exit the program if failed to connect to db // used when app cannot recover (like db failure)
  // 0 - success
  // 1 - failure
}); // This catches unhandled errors globally
