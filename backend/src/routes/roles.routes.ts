import express from "express";
import {
  createRole,
  deleteRole,
  getRoleById,
  getRoles,
  updateRole,
} from "../controllers/roles.controller.js";
const routers = express.Router();

routers.get("/", getRoles);
routers.get("/:id", getRoleById);
routers.post("/create", createRole);
routers.put("/:id", updateRole);
routers.delete("/:id", deleteRole);

export default routers;
