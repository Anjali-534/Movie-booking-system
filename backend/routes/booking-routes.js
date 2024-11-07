import express from "express";
import {
  deleteBooking,
  getBookingById,
  newBooking,
} from "../controllers/booking-controller.js";
const bookingsRouter = express.Router();
bookingsRouter.post("/", newBooking);
bookingsRouter.delete("/:id", deleteBooking);
bookingsRouter.get("/:id", getBookingById);
export default bookingsRouter;
