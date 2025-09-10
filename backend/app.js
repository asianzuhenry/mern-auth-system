// app.js
import express from "express";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes.js";

const app = express();

// Middlewares
app.use(cors({
  origin: "http://localhost:5173", // or http://localhost:3000 if using CRA
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true // allow cookies/auth headers if needed
}));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

export default app; // Export the configured app
