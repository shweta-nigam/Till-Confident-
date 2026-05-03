import { JWTClaims } from "../utils/user-token";

declare global {
  namespace Express {
    interface Request {
      user?: JWTClaims;
    }
  }
}