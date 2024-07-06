import mongoose from "mongoose";

const emotionMemorySchema = new mongoose.Schema({
  emotion: String,
  image: String,
  audio: String,
});
const EmotionMemory = mongoose.model("EmotionMemory", emotionMemorySchema);
export default EmotionMemory;
