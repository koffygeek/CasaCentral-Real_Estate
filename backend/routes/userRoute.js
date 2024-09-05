import express from "express";
import {
  allBookings,
  bookVisit,
  cancelBookings,
  createUser,
} from "../controllers/userCntrl.js";
const router = express.Router();

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.post("/allBookings", allBookings);
router.post("/removeBooking/:id", cancelBookings);

export { router as userRoute };
