import mongoose from "mongoose";

const emotionPlaygroundSchema = new mongoose.Schema({
  character: String,
  image: String,
  scenario: String,
  correctEmotion: String,
  options: [String],
  audio: String,
});

const EmotionPlayground = mongoose.model(
  "EmotionPlayground",
  emotionPlaygroundSchema
);

export default EmotionPlayground;
