import { RequestHandler } from "express";
import Joi from "joi";
import { HttpError } from "../utils/error.class.js";
import { insertingCourse } from "../utils/school.service.js";
import { IRequest } from "../middlewares/protectedRoute.middleware.js";
import mongoose from "mongoose";
import Class from "../models/classes.model.js";
import Course from "../models/courses.model.js";

// Validation schemas
const courseValidationSchema = Joi.object({
  name: Joi.string().required(),
  code: Joi.string().required(),
});

// Add Course to Class
export const addCourse: RequestHandler = async (req: IRequest, res, next) => {
  try {
    const { schoolId, classId } = req.params;
    const { name, code } = req.body;

    const { error } = courseValidationSchema.validate({ name, code });
    if (error) return next(new HttpError(400, error.details[0].message));

    const existingClass = await Class.findById(classId);
    if (!existingClass) {
      throw new HttpError(404, "Class not found");
    }

    if (existingClass.school.toString() !== schoolId) {
      throw new HttpError(400, "Class does not belong to this school");
    }

    const newCourse = await insertingCourse({
      name,
      classid: new mongoose.Types.ObjectId(classId),
    });

    existingClass.courses.push(newCourse._id as mongoose.Types.ObjectId);
    await existingClass.save();

    const updatedClass = await Class.findById(classId).populate("courses");

    res.status(201).json(updatedClass);
  } catch (error) {
    next(error);
  }
};

// Update Course
export const updateCourse: RequestHandler = async (
  req: IRequest,
  res,
  next,
) => {
  const updateCourseSchema = Joi.object({
    name: Joi.string().optional(),
    code: Joi.string().optional(),
  });

  try {
    const { classId, courseId } = req.params;
    const { error } = updateCourseSchema.validate(req.body);
    if (error) return next(new HttpError(400, error.details[0].message));

    const existingCourse = await Course.findById(courseId);
    if (!existingCourse) {
      throw new HttpError(404, "Course not found");
    }

    if (existingCourse.classid.toString() !== classId) {
      throw new HttpError(400, "Course does not belong to this class");
    }

    // If updating code, validate it
    if (req.body.code) {
      const validateCourseCode = (code: string): boolean => {
        if (!code) return false;
        if (typeof code !== "string") return false;
        if (code.length !== 9) return false;
        if (code.match(/^[A-Z]{1}[0-9]{1}[A-Z]{3}[0-9]{4}$/)) return true;
        return false;
      };

      if (!validateCourseCode(req.body.code)) {
        throw new HttpError(400, "Code of the course is invalid");
      }

      // Check if code already exists (excluding current course)
      const existingWithCode = await Course.findOne({
        code: req.body.code,
        _id: { $ne: courseId },
      });
      if (existingWithCode) {
        throw new HttpError(
          400,
          `Course with code ${req.body.code} already exists`,
        );
      }
    }

    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      { $set: req.body },
      { new: true, runValidators: true },
    );

    res.status(200).json(updatedCourse);
  } catch (error) {
    next(error);
  }
};

// Delete Course
export const deleteCourse: RequestHandler = async (
  req: IRequest,
  res,
  next,
) => {
  try {
    const { classId, courseId } = req.params;

    const existingCourse = await Course.findById(courseId);
    if (!existingCourse) {
      throw new HttpError(404, "Course not found");
    }

    if (existingCourse.classid.toString() !== classId) {
      throw new HttpError(400, "Course does not belong to this class");
    }

    const existingClass = await Class.findById(classId);
    if (!existingClass) {
      throw new HttpError(404, "Class not found");
    }

    // Check if this is the last course in the class
    if (existingClass.courses.length <= 1) {
      throw new HttpError(
        400,
        "Cannot delete the last course in a class. A class must have at least one course.",
      );
    }

    // Remove course from class's courses array
    existingClass.courses = existingClass.courses.filter(
      (id) => id.toString() !== courseId,
    );
    await existingClass.save();

    // Delete the course
    await Course.findByIdAndDelete(courseId);

    const updatedClass = await Class.findById(classId).populate("courses");

    res.status(200).json(updatedClass);
  } catch (error) {
    next(error);
  }
};

// Get All Courses in a Class
export const getCourses: RequestHandler = async (req: IRequest, res, next) => {
  try {
    const { schoolId, classId } = req.params;

    const classItem = await Class.findById(classId);
    if (!classItem) {
      throw new HttpError(404, "Class not found");
    }

    if (classItem.school.toString() !== schoolId) {
      throw new HttpError(400, "Class does not belong to this school");
    }

    const courses = await Course.find({ classid: classId }).sort({
      createdAt: -1,
    });

    const response = {
      courses,
      totalCourses: courses.length,
      className: classItem.name,
      academicLevel: classItem.academicLevel,
    };

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

// Get Single Course
export const getCourse: RequestHandler = async (req: IRequest, res, next) => {
  try {
    const { schoolId, classId, courseId } = req.params;

    const course = await Course.findById(courseId);
    if (!course) {
      throw new HttpError(404, "Course not found");
    }

    if (course.classid.toString() !== classId) {
      throw new HttpError(400, "Course does not belong to this class");
    }

    // Verify class belongs to school
    const classItem = await Class.findById(classId);
    if (!classItem || classItem.school.toString() !== schoolId) {
      throw new HttpError(400, "Class does not belong to this school");
    }

    const courseWithContext = {
      ...course.toObject(),
      className: classItem.name,
      academicLevel: classItem.academicLevel,
    };

    res.status(200).json(courseWithContext);
  } catch (error) {
    next(error);
  }
};
