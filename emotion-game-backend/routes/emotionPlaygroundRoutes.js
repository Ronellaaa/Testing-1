/*
// Import modules
import express from "express";
import EmotionPlayground from "../models/emotionPlaygroundModel.js";
//Create the router
const router = express.Router();
// Define routes
router.get("/", async (req, res) => {
  try {
    const characters = await EmotionPlayground.find({});
    res.json(characters);
  } catch (error) {
    res.status(500).send("server error");
  }
});
// Export the router
export default router;
*/
import express from "express";
import EmotionPlayground from "../models/emotionPlaygroundModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const characters = await EmotionPlayground.find({});
    res.json(characters);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

export default router;
