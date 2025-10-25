import express from "express";
import { auth } from "../middlewares/auth.js";
import {
  getPublishCreations,
  getUserCreations,
  toggleLikesCreation,
} from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.get("/get-user-creations", auth, getUserCreations);
userRoutes.get("/get-published-creations", auth, getPublishCreations);
userRoutes.post("/toggle-like-creation", auth, toggleLikesCreation);

export default userRoutes;
