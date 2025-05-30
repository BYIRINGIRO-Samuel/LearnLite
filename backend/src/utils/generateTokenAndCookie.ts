import { config } from "../config/default.js";
import { Response, Request } from "express";
import jwt from "jsonwebtoken";

const generateTokenAndCookie = (
  pid: string,
  req: Request,
  res: Response,
): string => {
  const token = jwt.sign({ pid: pid.toString() }, config.jwtSecret, {
    expiresIn: "24h",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: "strict",
    secure: config.secure === false,
  });

  return token;
};

export default generateTokenAndCookie;
