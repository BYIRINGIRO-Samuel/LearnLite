import mongoose from "mongoose";

export interface IRole extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  type: "admin" | "teacher" | "student";
  description: string;
}

const roleSchema = new mongoose.Schema<IRole>(
  {
    type: {
      type: String,
      required: true,
      unique: true,
      enum: ["admin", "teacher", "student"],
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Role = mongoose.model<IRole>("Role", roleSchema);

export default Role;
