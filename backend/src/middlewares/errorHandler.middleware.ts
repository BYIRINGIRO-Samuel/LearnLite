import { ErrorRequestHandler } from "express";
import mongoose from "mongoose";
import { HttpError, mongooseErrorMessages } from "../utils/error.class.js";
import { config } from "../config/default.js";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);

  if (err instanceof mongoose.Error) {
    const entry = [...mongooseErrorMessages.entries()].find(
      ([ErrorClass]) => err instanceof ErrorClass,
    );
    const details = entry ? entry[1] : "Unknown Mongoose error";
    res.status(400).json({ error: details });
    return;
  }

  if (err instanceof HttpError) {
    res.status(err.status || 500).json({ error: err.message });
    return;
  }

  if (err instanceof Error) {
    res.status(500).json({
      error: err.message || "Something went wrong",
    });
    return;
  }

  res.status(500).json({ error: "Internal Server Error" });
  return;
};

export default errorHandler;
