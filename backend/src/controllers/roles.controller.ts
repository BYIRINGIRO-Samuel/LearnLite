import { RequestHandler } from "express";
import mongoose from "mongoose";
import Role from "../models/roles.model.js";
import { HttpError } from "../utils/error.class.js";

export const createRole: RequestHandler = async (req, res, next) => {
  try {
    const { type, description } = req.body;
    if (!type || !description) throw new HttpError(400, "Invalid role data");

    const existingRole = await Role.findOne({ type });
    if (existingRole) throw new HttpError(400, "Role already exists");

    const newRole = await Role.create({ type, description });
    res
      .status(201)
      .json({ message: "Role created successfully", role: newRole });
  } catch (error) {
    next(error);
  }
};

export const getRoles: RequestHandler = async (req, res, next) => {
  try {
    const roles = await Role.find();
    res.status(200).json({ message: "Roles fetched successfully", roles });
  } catch (error) {
    next(error);
  }
};

export const getRoleById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new HttpError(400, "Invalid role ID");

    const role = await Role.findById(id);
    if (!role) throw new HttpError(404, "Role not found");

    res.status(200).json({ message: "Role fetched successfully", role });
  } catch (error) {
    next(error);
  }
};

export const updateRole: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { type, description } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new HttpError(400, "Invalid role ID");

    const role = await Role.findByIdAndUpdate(
      id,
      { type, description },
      { new: true },
    );
    if (!role) throw new HttpError(404, "Role not found");

    res.status(200).json({ message: "Role updated successfully", role });
  } catch (error) {
    next(error);
  }
};

export const deleteRole: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new HttpError(400, "Invalid role ID");

    const role = await Role.findByIdAndDelete(id);
    if (!role) throw new HttpError(404, "Role not found in database");

    res.status(200).json({ message: "Role deleted successfully", role });
  } catch (error) {
    next(error);
  }
};
