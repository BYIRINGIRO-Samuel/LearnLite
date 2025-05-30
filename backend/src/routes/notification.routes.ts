import { Router } from "express";
import { protectedRoute } from "../middlewares/protectedRoute.middleware.js";
import {
  getNofitications,
  markAsSeen,
  createNotification,
} from "../controllers/notification.controller.js";

const router = Router();

router.get("/", protectedRoute, getNofitications);
router.get("/seen/:id", protectedRoute, markAsSeen);
router.post("/create", protectedRoute, createNotification);

export default router;
