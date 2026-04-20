import express from "express";
import authRoutes from "./src/modules/auth/auth.routes.js"
import oidcRoutes from "./src/modules/oidc/oidc.routes.js"

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/", oidcRoutes);

export default app;