import { RequestHandler } from "express";
import Joi from "joi";
import { HttpError } from "../utils/error.class.js";
import { insertingClasses } from "../utils/school.service.js";
import { IRequest } from "../middlewares/protectedRoute.middleware.js";
import mongoose from "mongoose";
import School from "../models/school.model.js";
import Class from "../models/classes.model.js";
import Course from "../models/courses.model.js";

// Validation schemas
const courseValidationSchema = Joi.object({
  name: Joi.string().required(),
  code: Joi.string().required(),
});

const classValidationSchema = Joi.object({
  name: Joi.string().required(),
  courses: Joi.array().items(courseValidationSchema).required(),
  academicLevel: Joi.string()
    .valid("primary", "secondary", "college", "university", "technical")
    .required(),
});

// Add Class to School
export const addClass: RequestHandler = async (req: IRequest, res, next) => {
  try {
    const { schoolId } = req.params;
    const { name, courses, academicLevel } = req.body;

    const { error } = classValidationSchema.validate({
      name,
      courses,
      academicLevel,
    });
    if (error) return next(new HttpError(400, error.details[0].message));

    const newClass = await insertingClasses({
      name,
      courses,
      academicLevel,
      school: new mongoose.Types.ObjectId(schoolId),
    });

    const school = await School.findById(schoolId);
    if (!school) {
      return next(new HttpError(404, "School not found"));
    }

    school.classes.push(newClass._id as mongoose.Types.ObjectId);
    await school.save();

    const updatedSchool = await School.findById(schoolId).populate({
      path: "classes",
      populate: { path: "courses" },
    });

    res.status(201).json(updatedSchool);
  } catch (error) {
    next(error);
  }
};

// Update Class
export const updateClass: RequestHandler = async (req: IRequest, res, next) => {
  const updateClassSchema = Joi.object({
    name: Joi.string().optional(),
    academicLevel: Joi.string()
      .valid("primary", "secondary", "college", "university", "technical")
      .optional(),
  });

  try {
    const { schoolId, classId } = req.params;
    const { error } = updateClassSchema.validate(req.body);
    if (error) return next(new HttpError(400, error.details[0].message));

    const existingClass = await Class.findById(classId);
    if (!existingClass) {
      throw new HttpError(404, "Class not found");
    }

    if (existingClass.school.toString() !== schoolId) {
      throw new HttpError(400, "Class does not belong to this school");
    }

    const updatedClass = await Class.findByIdAndUpdate(
      classId,
      { $set: req.body },
      { new: true, runValidators: true },
    ).populate("courses");

    res.status(200).json(updatedClass);
  } catch (error) {
    next(error);
  }
};

// Delete Class
export const deleteClass: RequestHandler = async (req: IRequest, res, next) => {
  try {
    const { schoolId, classId } = req.params;

    const existingClass = await Class.findById(classId);
    if (!existingClass) {
      throw new HttpError(404, "Class not found");
    }

    if (existingClass.school.toString() !== schoolId) {
      throw new HttpError(400, "Class does not belong to this school");
    }

    // Delete all courses in the class
    await Course.deleteMany({ classid: classId });

    // Remove class from school's classes array
    await School.findByIdAndUpdate(schoolId, { $pull: { classes: classId } });

    // Delete the class
    await Class.findByIdAndDelete(classId);

    const updatedSchool = await School.findById(schoolId).populate({
      path: "classes",
      populate: { path: "courses" },
    });

    res.status(200).json(updatedSchool);
  } catch (error) {
    next(error);
  }
};

// Get All Classes in School
export const getClasses: RequestHandler = async (req: IRequest, res, next) => {
  try {
    const { schoolId } = req.params;

    const classes = await Class.find({ school: schoolId })
      .populate("courses")
      .sort({ createdAt: -1 });

    const classesWithStats = classes.map((classItem) => ({
      ...classItem.toObject(),
      courseCount: classItem.courses.length,
    }));

    const response = {
      classes: classesWithStats,
      totalClasses: classes.length,
      totalCourses: classes.reduce(
        (total, classItem) => total + classItem.courses.length,
        0,
      ),
    };

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

// Get Single Class with Courses
export const getClass: RequestHandler = async (req: IRequest, res, next) => {
  try {
    const { schoolId, classId } = req.params;

    const classItem = await Class.findById(classId).populate("courses");

    if (!classItem) {
      throw new HttpError(404, "Class not found");
    }

    if (classItem.school.toString() !== schoolId) {
      throw new HttpError(400, "Class does not belong to this school");
    }

    const classWithStats = {
      ...classItem.toObject(),
      courseCount: classItem.courses.length,
    };

    res.status(200).json(classWithStats);
  } catch (error) {
    next(error);
  }
};
