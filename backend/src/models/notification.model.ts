import mongoose from "mongoose";

export interface INotification {
  _id?: mongoose.Types.ObjectId;
  title: string;
  message: string;
  type: string;
  seenBy?: string[] | mongoose.Types.ObjectId[];
  createdFor: string[] | mongoose.Types.ObjectId[];
  createdBy: string | mongoose.Types.ObjectId;
  isSeenByAll?: boolean;
}

const notificationSchema = new mongoose.Schema<INotification>(
  {
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ["approval", "student-question"],
      required: true,
    },
    seenBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    createdFor: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

notificationSchema.virtual("isSeenByAll").get(function () {
  if (!this.seenBy || !this.createdFor) return false;
  const createdForIds = this.createdFor.map((user) =>
    typeof user === "object" && user._id
      ? user._id.toString()
      : user.toString(),
  );
  const seenByIds = this.seenBy.map((user) =>
    typeof user === "object" && user._id
      ? user._id.toString()
      : user.toString(),
  );

  const createdForSet = new Set(createdForIds);
  const seenBySet = new Set(seenByIds);
  for (const id of createdForSet) {
    if (!seenBySet.has(id)) {
      return false;
    }
  }

  return true;
});

const Notification = mongoose.model<INotification>(
  "Notification",
  notificationSchema,
);

export default Notification;
