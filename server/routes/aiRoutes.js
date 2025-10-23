import express from "express";
import { auth } from "../middlewares/auth.js";
import { generateArticle } from "../controllers/aiController.js";

const aiRoutes = express.Router();

aiRoutes.post("/generate-article", auth, generateArticle);

export default aiRoutes;
