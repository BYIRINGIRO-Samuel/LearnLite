import mongoose from "mongoose";
//hello world sdnvdsjkfnfsjkbjdksbjdksbjkdsbjkfsdbjkfsdbjkfdsvjkdfsbkjdfsvjdksvbdsjkfvbjdksvbdskjvjkdfsvbfjdk

export interface ISchool extends mongoose.Document {
  name: string;
  schoolAdmin: mongoose.Types.ObjectId;
  status: "active" | "inactive" | "pending" | "deleted";
  profilePicture?: string;
  classes: mongoose.Types.ObjectId[];
}

const schoolSchema = new mongoose.Schema<ISchool>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },
    schoolAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "pending", "deleted"],
      default: "pending",
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
    classes: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Class",
    },
  },
  {
    timestamps: true,
  },
);

schoolSchema.index({ name: 1 }, { unique: true });

const School = mongoose.model<ISchool>("School", schoolSchema);
export default School;
