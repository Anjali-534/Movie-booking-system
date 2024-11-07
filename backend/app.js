import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/User-routes.js";
import adminRouter from "./routes/admin-routes.js";
import movieRouter from "./routes/movie-routes.js";
import bookingsRouter from "./routes/booking-routes.js";
// const cors = require("cors");
dotenv.config();
// app.use(
//   cors({
//     origin: "http://localhost:3001",
//   })
// );
const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "An error occurred" });
});

const mongoURI = `mongodb+srv://anjaliaggarwal534:${process.env.MONGODB_PASSWORD}@cluster0.h9t4e.mongodb.net/<Movie-booking-system>?retryWrites=true&w=majority`;

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(5000, () => {
      console.log(`Server is running on http://localhost:5000`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });
