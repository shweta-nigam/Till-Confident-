import express from "express"
import { registerClient, wellKnown } from "./oidc.controller";
import authMiddleware from "../../common/middlewares/auth.middleware.js";

const router = express.Router()

router.post("/client/register", registerClient);
router.get("/.well-known/openid-configuration", wellKnown);
router.get("/jwks", controller.getJWKS);
router.get("/auth", controller.authorize);
router.post("/token", controller.token);
router.get("/userinfo", controller.userInfo);


router.get("/userinfo", authMiddleware, controller.userInfo);

export default router