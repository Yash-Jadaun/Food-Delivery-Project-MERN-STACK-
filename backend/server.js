import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";

// Load env variables
dotenv.config();

// App setup
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/images", express.static("uploads"));

// Routes
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);

// Connect DB
connectDB();

// Root
app.get("/", (req, res) => {
  res.send("API Working");
});

// Start Server
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
