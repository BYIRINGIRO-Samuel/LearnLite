import mongoose from "mongoose";
import { config } from "../config/default.js";

const connectDB = async () => {
  const uri = config.mongoURI;
  mongoose
    .connect(uri)
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });
};

export default connectDB;
