import mongoose from "mongoose";
import Class from "../models/classes.model.js";
import Course from "../models/courses.model.js";
import School from "../models/school.model.js";
import User from "../models/users.model.js";
import { HttpError } from "./error.class.js";
import { generateCoursePublicId } from "../utils/generateRandom.js";

interface ICourse {
  name: string;
  classid: mongoose.Types.ObjectId;
}

interface IClassPayload {
  name: string;
  courses: string[];
  academicLevel:
    | "primary"
    | "secondary"
    | "college"
    | "university"
    | "technical";
  school: mongoose.Types.ObjectId;
}
interface ISchoolPayload {
  name: string;
  classes: {
    name: string;
    courses: string[];
    academicLevel:
      | "primary"
      | "secondary"
      | "college"
      | "university"
      | "technical";
  }[];
  email: string;
  profilePicture?: string;
  schoolAdmin: mongoose.Types.ObjectId;
}

async function insertingCourse({ name, classid }: ICourse) {
  try {
    if (!name) throw new HttpError(400, "Course name is required");

    const classDoc = await Class.findById(classid).select("academicLevel");
    if (!classDoc) throw new HttpError(404, "Class not found for course");

    const publicId = generateCoursePublicId(name, classDoc.academicLevel);

    // Create and save course
    const newCourse = new Course({
      name,
      classid,
      publicId,
    });

    await newCourse.save();
    return newCourse;
  } catch (error) {
    console.error(`Error inserting course (${name}):`, error);
    throw error;
  }
}

// Insert a single class and its courses
async function insertingClasses({
  name,
  courses,
  academicLevel,
  school,
}: IClassPayload) {
  try {
    if (!name || !courses || !academicLevel || !school)
      throw new HttpError(
        400,
        "Class name, academic level, courses, and school ID are required",
      );

    if (!Array.isArray(courses) || courses.length === 0)
      throw new HttpError(400, `Class "${name}" must have at least one course`);

    const newClass = new Class({ name, courses: [], academicLevel, school });
    await newClass.save();

    const createdCourses = await Promise.all(
      courses.map((courseName) =>
        insertingCourse({
          name: courseName,
          classid: newClass._id as mongoose.Types.ObjectId,
        }),
      ),
    );

    const courseIds = createdCourses.map((course) => course._id);
    (newClass as any).courses = courseIds;

    await newClass.save();
    return newClass;
  } catch (error) {
    console.error(`Error inserting class (${name}):`, error);
    throw error;
  }
}

async function insertingSchool({
  name,
  classes,
  email,
  profilePicture,
  schoolAdmin,
}: ISchoolPayload) {
  try {
    if (!name || !email || !schoolAdmin || !classes || classes.length === 0) {
      throw new HttpError(
        400,
        "School name, email, admin, and classes are required",
      );
    }

    const [existingSchool, adminInOtherSchool, adminUser] = await Promise.all([
      School.findOne({ name }),
      School.findOne({ schoolAdmin }),
      User.findById(schoolAdmin).populate("role"),
    ]);

    if (existingSchool)
      throw new HttpError(400, `School "${name}" already exists`);

    if (!adminUser)
      throw new HttpError(404, `Admin with ID "${schoolAdmin}" not found`);

    const roleType = (adminUser.role as any)?.type;
    if (roleType !== "admin")
      throw new HttpError(400, `User "${adminUser.name}" is not an admin`);

    if (adminInOtherSchool)
      throw new HttpError(
        400,
        `Admin "${adminUser.name}" already manages a school`,
      );

    const newSchool = new School({
      name,
      email,
      profilePicture: profilePicture || "",
      schoolAdmin,
      classes: [],
    });

    newSchool.status = "active";
    await newSchool.save();

    const createdClasses = await Promise.all(
      classes.map(({ name, courses, academicLevel }) =>
        insertingClasses({
          name,
          courses,
          academicLevel,
          school: newSchool._id as mongoose.Types.ObjectId,
        }),
      ),
    );

    newSchool.classes = createdClasses.map(
      (cls) => cls._id as mongoose.Types.ObjectId,
    );

    if (newSchool.classes.length === 0)
      throw new HttpError(
        400,
        `School "${name}" must contain at least one class`,
      );

    await newSchool.save();
    return newSchool;
  } catch (error) {
    console.error(`Error inserting school (${name}):`, error);
    throw error;
  }
}

export { insertingCourse, insertingClasses, insertingSchool };
