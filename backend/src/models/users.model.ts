//not completed
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { generateRandomToken, hashToken } from "../utils/generateRandom.js";
import { config } from "../config/default.js";

export interface IUser extends mongoose.Document {
  _id: mongoose.Types.ObjectId | string;
  name: string;
  email: string;
  password: string;
  role: mongoose.Types.ObjectId | string;
  status: "active" | "inactive" | "pending" | "deleted" | "rejected";
  profilePicture: string;
  school: mongoose.Types.ObjectId | string;
  classname: mongoose.Types.ObjectId | string;
  classes: {
    classname: mongoose.Types.ObjectId | string;
    course: mongoose.Types.ObjectId | string;
  }[];
  publicId: string; //used in sessions and blacklisted tokens
  resetPasswordToken: string | null;
  resetPasswordExpires: Date | null;
  generateResetToken: () => string;
  isResetTokenExpired: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 1024,
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "pending", "deleted"],
      required: true,
    },
    profilePicture: {
      type: String,
      default: "",
      validate: {
        validator: function (v: string) {
          return (
            v.startsWith("http") ||
            v.startsWith("data:image/") ||
            v.startsWith("")
          );
        },
        message: "Invalid profile picture URL",
      },
    },
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: false,
    },
    classname: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: false,
    },
    //this will be only on the teacher
    classes: [
      {
        classname: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Class",
          required: false,
        },
        course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
          required: false,
        },
      },
    ],
    publicId: {
      type: String,
      default: uuidv4,
      required: true,
      unique: true,
    },
    resetPasswordToken: {
      type: String,
      default: null,
    },
    resetPasswordExpires: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.methods.generateResetToken = function () {
  const resetToken = generateRandomToken(6);
  this.resetPasswordToken = hashToken(resetToken);
  this.resetPasswordExpires = Date.now() + config.tokenDuration * 60 * 1000;
  return resetToken;
};

userSchema.virtual("isResetTokenExpired").get(function () {
  return this.resetPasswordExpires && new Date() > this.resetPasswordExpires;
});

const User = mongoose.model<IUser>("User", userSchema);
export default User;
