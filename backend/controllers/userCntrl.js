import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createUser = asyncHandler(async (req, res) => {
  console.log("Creating a user");
  let { email } = req.body;

  // console.log(email);

  const userExists = await prisma.user.findUnique({ where: { email } });
  if (!userExists) {
    const user = await prisma.user.create({ data: req.body });
    res.send({
      message: "user registrered successfully",
      user: user,
    });
  } else res.send(201).json({ message: "User already registrered" });
});

// to book a visit to resd
export const bookVisit = asyncHandler(async (req, res) => {
  const { email, date } = req.body;
  const { id } = req.params;

  try {
    const alreadyBooked = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });
    if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
      res.status(400).json({ message: "This residency already booked by you" });
    } else {
      await prisma.user.update({
        where: { email: email },
        data: {
          bookedVisits: { push: { id, date } },
        },
      });
      res.send("Your visit is booked successfully");
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

// to get all bookings
export const allBookings = asyncHandler(async (req, res) => {
  const { email } = req.body;

  try {
    const bookings = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });
    res.status(200).send(bookings);
  } catch (err) {
    throw new Error(err.message);
  }
});
