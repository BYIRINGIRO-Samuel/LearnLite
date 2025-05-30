import { RequestHandler } from "express";
import Joi from "joi";
import _ from "lodash";
import { IRequest } from "../middlewares/protectedRoute.middleware.js";
import User, { IUser } from "../models/users.model.js";
import Notification, { INotification } from "../models/notification.model.js";
import School from "../models/school.model.js";

const approveAccount: RequestHandler = async (req: IRequest, res, next) => {
  let admin = req.user;
  const approveSchema = Joi.object({
    username: Joi.string().required(),
    action: Joi.string().valid("approve", "reject").required(),
  });
  try {
    const { error } = approveSchema.validate(req.body);
    if (error) throw new Error(error.message);

    admin = await User.findById(admin!._id);
    const adminSchool = await School.findOne({ schoolAdmin: admin!._id })
      .select("_id name")
      .lean();
    if (!adminSchool || !admin) throw new Error("Admin not found");

    const { username, action } = req.body;
    const user = await User.findOne({ name: username });
    if (!user) throw new Error("User not found");

    if (user.status === "active") throw new Error("User already approved");

    if (String(user.role) == String(admin!.role))
      throw new Error("You are not authorized to approve this account");

    if (String(user.school) !== String(adminSchool!._id))
      throw new Error("You are not authorized to approve this account");

    let decision: "approved" | "rejected";
    const status = action === "approve" ? "active" : "rejected";
    decision = action === "approve" ? "approved" : "rejected";

    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      { status },
      { new: true },
    );
    if (!updatedUser) throw new Error("Failed to update user status");

    const newNotification = await Notification.create({
      title: `Account ${decision}`,
      message: `Your account has been ${decision} by ${admin!.name} from ${adminSchool!.name}`,
      type: "approval",
      createdBy: admin!._id,
      createdFor: [user._id],
    });

    const formattedNotification = await Notification.findById(
      newNotification._id,
    )
      .populate("createdBy", "name -_id")
      .populate("createdFor", "name -_id");

    res.status(200).json({
      message: `Account ${decision}`,
      user: _.pick(updatedUser.toObject(), [
        "name",
        "email",
        "status",
        "school",
        "updatedAt",
      ]),
      notification: formattedNotification,
    });
  } catch (error) {
    console.log("Error in approveAccount admin controller: ", error);
    next(error);
  }
};

export { approveAccount };
