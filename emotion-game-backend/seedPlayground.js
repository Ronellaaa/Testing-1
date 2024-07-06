import mongoose from "mongoose";
import dotenv from "dotenv"; // Import dotenv to load environment variables
import EmotionPlayground from "./models/emotionPlaygroundModel.js";

dotenv.config(); // Load environment variables from .env file

const dbURI = process.env.MONGODB_URI;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log("Error connecting to MongoDB Atlas:", err));

const characters = [
  // Define your characters here
  {
    character: "Joe",
    image: "assets/joe.png",
    scenario: "Joe found a new toy in the playground.",
    correctEmotion: "Happy",
    options: ["Happy", "Sad", "Angry"],
    audio: "assets/joe.mp3",
  },
  {
    character: "Max",
    image: "assets/max.png",
    scenario: "Max lost her favorite toy.",
    correctEmotion: "Sad",
    options: ["Happy", "Sad", "Angry"],
    audio: "assets/max.mp3",
  },
  {
    character: "Jack",
    image: "assets/jack.png",
    scenario: "Jack was not allowed to play on the slide.",
    correctEmotion: "Angry",
    options: ["Happy", "Sad", "Angry"],
    audio: "assets/jack.mp3",
  },
  {
    character: "Lily",
    image: "assets/lily.png",
    scenario: "Lily made a new friend in the playground.",
    correctEmotion: "Happy",
    options: ["Happy", "Sad", "Angry"],
    audio: "assets/lily.mp3",
  },
  {
    character: "Alex",
    image: "assets/alex.png",
    scenario: "Alex fell down and scraped his knee.",
    correctEmotion: "Sad",
    options: ["Happy", "Sad", "Angry"],
    audio: "assets/alex.mp3",
  },
  {
    character: "jerry",
    image: "assets/jerry.png",
    scenario: "Jerry was pushed by another child.",
    correctEmotion: "Angry",
    options: ["Happy", "Sad", "Angry"],
    audio: "assets/jerry.mp3",
  },

  {
    character: "Kelly",
    image: "assets/kelly.png",
    scenario: "Kelly dropped her ice cream.",
    correctEmotion: "Sad",
    options: ["Happy", "Sad", "Angry"],
    audio: "assets/kelly.mp3",
  },
];

EmotionPlayground.insertMany(characters)
  .then(() => {
    console.log("Data inserted");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
  });
