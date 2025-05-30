import express from "express";
import {
  addCourse,
  updateCourse,
  deleteCourse,
  getCourse,
  getCourses,
} from "../controllers/courses.controller.js";
import {
  protectedRoute,
  protectedAdminRoute,
} from "../middlewares/protectedRoute.middleware.js";

const routes = express.Router();

// Course Management
routes.get("/:schoolId/classes/:classId/courses", protectedRoute, getCourses);
routes.get(
  "/:schoolId/classes/:classId/courses/:courseId",
  protectedRoute,
  getCourse,
);
routes.post(
  "/:schoolId/classes/:classId/courses",
  protectedRoute,
  protectedAdminRoute,
  addCourse,
);
routes.put(
  "/:schoolId/classes/:classId/courses/:courseId",
  protectedRoute,
  protectedAdminRoute,
  updateCourse,
);
routes.delete(
  "/:schoolId/classes/:classId/courses/:courseId",
  protectedRoute,
  protectedAdminRoute,
  deleteCourse,
);

export default routes;
