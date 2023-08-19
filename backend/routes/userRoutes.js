import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";

import {
  logoutUser,
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  updateUser,
  deleteUser,
  getUserById,
  getUsers,
} from "../controllers/usersController.js";

const router = express.Router();

router.route("/").post(registerUser).get(protect, admin, getUsers);
router
  .route("/profile")
  .get(protect, getUserProfile) //must be before GET /api/users/:id
  .put(protect, updateUserProfile);
router.route("/:id").get(protect, admin, getUserById);

router.post("/login", authUser);
router.post("/logout", logoutUser);

router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .put(protect, admin, updateUser);

export default router;
