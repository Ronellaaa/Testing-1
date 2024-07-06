/*import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Emotion from "./emotionModel.js";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const app = express();
const port = 5001;

// Resolve __dirname and __filename for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware setup
app.use(cors());
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "assets")));

// MongoDB connection string
const dbURI =
  "mongodb+srv://ronelladias:BKuX0B6qU1rLwIkN@emotiongamecluster.vwhyf3a.mongodb.net/?retryWrites=true&w=majority&appName=EmotionGameCluster";

// Connect to MongoDB
mongoose
  .connect(dbURI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));

// Define routes
app.get("/api/emotions/:type", async (req, res) => {
  const { type } = req.params;
  const emotion = await Emotion.findOne({ type });
  if (emotion) {
    res.json(emotion);
  } else {
    res.status(404).send("Emotion not found");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
*/
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import emotionRoutes from "./routes/emotionRoutes.js";
import emotionPlaygroundRoutes from "./routes/emotionPlaygroundRoutes.js";
import emotionMemoryRoutes from "./routes/emotionMemoryRoutes.js"; // Import the new routes
import path from "path";
import { fileURLToPath } from "url";

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "assets")));

// Get the MongoDB URI from environment variables
const dbURI = process.env.MONGODB_URI;

if (!dbURI) {
  throw new Error("MONGODB_URI environment variable not set");
}

mongoose
  .connect(dbURI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));

app.use("/api/emotions", emotionRoutes);
app.use("/api/emotion-playground", emotionPlaygroundRoutes);
app.use("/api/emotion-memory", emotionMemoryRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
