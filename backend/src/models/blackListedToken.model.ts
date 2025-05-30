import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { HttpError } from "../utils/error.class.js";

const blackListedTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
      unique: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

blackListedTokenSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const BlackListedToken = mongoose.model(
  "BlackListedToken",
  blackListedTokenSchema,
);
export default BlackListedToken;
