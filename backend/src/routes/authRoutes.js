// authRoutes.js
import express from "express";
import { RegisterUser, LoginUser, getUserProfile, getAdminDashboard } from "../controllers/authController.js";
import { protect, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// public routes
router.post("/register", RegisterUser);
router.post("/login", LoginUser);

// protected routes
router.get("/profile", protect, getUserProfile);
router.get("/dashboard", protect, isAdmin, getAdminDashboard); // New admin route

export default router;
