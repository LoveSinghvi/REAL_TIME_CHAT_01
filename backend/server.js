import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

// Fix: resolve backend directory correctly
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Always load backend/.env
dotenv.config({ path: path.join(__dirname, ".env") });

console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse JSON payloads
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/user", userRoutes);

// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

// Start server
server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`✅ Server Running on port ${PORT}`);
});
