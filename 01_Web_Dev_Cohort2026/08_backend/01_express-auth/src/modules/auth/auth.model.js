import { string } from "joi";
import mongoose from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: string,
      trim: true,
      minLength: 2,
      maxLength: 50,
      required: [true, "Name is required"], //  if name is not there - this msg will be shown
      // only required key has this special syntax
    },
    email: {
      type: string,
      trim: true,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },

    password: {
      type: string,
      trim: true,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    role: {
      type: string,
      enum: ["CUSTOMER", "SELLER", "ADMIN"], // make array and use it here
      default: "customer",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: string,
      select: false, // special keyword
    },
    refreshToken: {
      type: string,
      select: false,
    },
    resetPasswordToken: {
      type: string,
      select: false,
    },
    resetPasswordExpires: {
      type: string,
      select: false,
    },
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
