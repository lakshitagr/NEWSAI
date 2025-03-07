import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import newRoutes from './routes/newRoutes.js';
import cors from "cors";
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use(cookieParser());
app.use(express.json());

dotenv.config();

dbConnect();

app.use("/auth", userRoutes);
app.use("/api", newRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on the PORT ${process.env.PORT}`);
});
