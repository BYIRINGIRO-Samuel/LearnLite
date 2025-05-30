import express from "express";
import {
  createUser,
  forgotPassword,
  getProfile,
  resetPassword,
  login,
  logout,
  updateProfile,
} from "../controllers/users.controller.js";
import {
  protectedRoute,
  unProtectedRoutes,
} from "../middlewares/protectedRoute.middleware.js";
import { approveAccount } from "../controllers/users.admin.controller.js";
const routes = express.Router();

routes.post("/create", unProtectedRoutes, createUser);
routes.post("/login", unProtectedRoutes, login);
routes.post("/forgot-password", unProtectedRoutes, forgotPassword);
routes.patch("/reset-password", unProtectedRoutes, resetPassword);

//user protected routes
routes.post("/logout", protectedRoute, logout);
routes.get("/profile", protectedRoute, getProfile);
routes.put("/profile", protectedRoute, updateProfile);

//admin routes
routes.post("/admin/approve-account", protectedRoute, approveAccount);

export default routes;
