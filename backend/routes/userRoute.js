import express from "express";
import {
  allBookings,
  bookVisit,
  createUser,
} from "../controllers/userCntrl.js";
const router = express.Router();

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.post("/allBookings", allBookings);

export { router as userRoute };
