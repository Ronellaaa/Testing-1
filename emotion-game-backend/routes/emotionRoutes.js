import express from "express";
import Emotion from "../models/emotionModel.js";

const router = express.Router();

router.get("/:type", async (req, res) => {
  try {
    const { type } = req.params;
    const emotion = await Emotion.findOne({ type });
    if (emotion) {
      res.json(emotion);
    } else {
      res.status(404).send("Emotion not found");
    }
  } catch (error) {
    res.status(500).send("Server error");
  }
});

export default router;
