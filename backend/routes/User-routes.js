import express from "express";
import {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
  login,
  getBookingsOfUser,
} from "../controllers/User-controller.js";
const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", addUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.post("/login", login);
userRouter.get("/bookings/:id", getBookingsOfUser);
export default userRouter;
