import express from "express";
import cors from "cors";
import "dotenv/config";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import aiRoutes from "../routes/aiRoutes.js";
import connectCloudinary from "../config/cloudinary.js";
import userRoutes from "../routes/userRoute.js";

const app = express();

// Cloudinary connection (safe to await before export)
await connectCloudinary();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// Public route
app.get("/", (req, res) => {
  res.send("🚀 Rapid AI Server is live");
});

// Protect all API routes with Clerk
app.use(requireAuth());

app.use("/api/ai", aiRoutes);
app.use("/api/user", userRoutes);

// ✅ Run locally if not on Vercel
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () =>
    console.log(`🚀 Local server running on port ${PORT}`)
  );
}

// ✅ Export for Vercel deployment
export default app;
