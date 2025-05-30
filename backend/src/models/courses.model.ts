import mongoose from "mongoose";
import { generateCoursePublicId } from "../utils/generateRandom.js";
import Class from "./classes.model.js";
import { HttpError } from "../utils/error.class.js";

export interface ICourse extends mongoose.Document {
  name: string;
  classid: mongoose.Types.ObjectId;
  publicId: string;
}

const courseSchema = new mongoose.Schema<ICourse>(
  {
    name: {
      type: String,
    },
    classid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: false,
    },
    publicId: {
      type: String,
      required: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

courseSchema.index({ name: 1, publicId: 1 }, { unique: true });

const Course = mongoose.model<ICourse>("Course", courseSchema);
export default Course;
