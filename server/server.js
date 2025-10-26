import express from "express";
import cors from "cors";
import "dotenv/config";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import aiRoutes from "./routes/aiRoutes.js";
import connectCloudinary from "./config/cloudinary.js";
import userRoutes from "./routes/userRoute.js";

const app = express();

await connectCloudinary();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.get("/", (req, res) => res.send("Rapid AI Server is live"));

app.use(requireAuth());

app.use("/api/ai", aiRoutes);
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
