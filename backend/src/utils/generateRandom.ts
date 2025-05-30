import crypto from "crypto";
import { customAlphabet } from "nanoid";

const characters = "0123456789";

const generateRandomToken = (length: number = 6) => {
  let token = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters[randomIndex];
  }
  return token;
};

const hashToken = (token: string) => {
  return crypto.createHash("sha256").update(token).digest("hex");
};

const generateCoursePublicId = (courseName: string, academicLevel: string) => {
  const random6 = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 10);
  const coursepart = courseName.trim().toLowerCase().slice(0, 4);
  const academicLevelPart = academicLevel.trim().toLowerCase().slice(0, 4);

  return `${coursepart}-${academicLevelPart}-${random6(6)}`;
};

export { generateRandomToken, hashToken, generateCoursePublicId };
