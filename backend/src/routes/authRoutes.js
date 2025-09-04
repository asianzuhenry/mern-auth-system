const express = require("express");
const {
  RegisterUser,
  LoginUser,
  getUserProfile,
} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// public routes
router.post("/register", RegisterUser);
router.post("/login", LoginUser);

// protected routes
router.get("/profile", protect, getUserProfile);

module.exports = router;
