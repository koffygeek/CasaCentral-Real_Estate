import asyncHandler from "express-async-handler";
import { Prisma } from "../config/prismaConfig";

export const createUser = asyncHandler(async (req, res) => {
  console.log("Creating a user");
  let { email } = req.body;

  console.log(email);
});
