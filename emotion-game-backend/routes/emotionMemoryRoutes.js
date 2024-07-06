import express from "express";
import EmotionMemory from "../models/emotionMemoryModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cards = await EmotionMemory.find({});
    res.json(cards);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

export default router;
