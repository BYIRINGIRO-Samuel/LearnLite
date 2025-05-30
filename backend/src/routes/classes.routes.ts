import express from "express";
import {
  getClasses,
  getClass,
  addClass,
  updateClass,
  deleteClass,
} from "../controllers/classes.controller.js";
import {
  protectedAdminRoute,
  protectedRoute,
} from "../middlewares/protectedRoute.middleware.js";

const routes = express.Router();

// Class Management
routes.get(
  "/:schoolId/classes",
  protectedRoute,
  protectedAdminRoute,
  getClasses,
);
routes.get(
  "/:schoolId/classes/:classId",
  protectedRoute,
  protectedAdminRoute,
  getClass,
);
routes.post(
  "/:schoolId/classes",
  protectedRoute,
  protectedAdminRoute,
  addClass,
);
routes.put(
  "/:schoolId/classes/:classId",
  protectedRoute,
  protectedAdminRoute,
  updateClass,
);
routes.delete(
  "/:schoolId/classes/:classId",
  protectedRoute,
  protectedAdminRoute,
  deleteClass,
);

export default routes;
