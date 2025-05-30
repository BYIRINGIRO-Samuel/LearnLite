import express from "express";
import {
  createSchool,
  getSchool,
  updateSchool,
  getSchoolStats,
} from "../controllers/schools.controller.js";
import {
  protectedAdminRoute,
  protectedRoute,
} from "../middlewares/protectedRoute.middleware.js";
const routes = express.Router();

// School Management
routes.post("/create", protectedRoute, protectedAdminRoute, createSchool); // Create school
routes.get("/:schoolId", protectedRoute, getSchool); // Get school details with stats
routes.put("/:schoolId", protectedRoute, protectedAdminRoute, updateSchool); // Update school basic info
routes.get("/:schoolId/stats", protectedRoute, getSchoolStats); // Get school statistics

export default routes;
