import mongoose from "mongoose";
//define the schema and Model
const emotionSchema = new mongoose.Schema({
  //Create a Mongoose model called "Emotion" using the schema. This model represents the "emotions" collection in the database.
  type: String,
  levels: [
    {
      image: String,
      correct: String,
      options: [String],
      video: String,
    },
  ],
});

const Emotion = mongoose.model("Emotion", emotionSchema);

export default Emotion;
