import ApiError from "../../common/utils/api-error";
import {
     generateAccessToken,
      generateRefreshToken,
      generateResetToken,
      verifyRefreshToken,
} from "../../common/utils/jwt.utils.js"
import User from "./auth.model.js"
import crypto from "crypto"


const hashToken = (token) => {
    crypto.createHash("sha256").update(token).digest("hex");


    const register = async({name,email,password,role}) => {
        const existing = await  User.findOne({email});
    }

}