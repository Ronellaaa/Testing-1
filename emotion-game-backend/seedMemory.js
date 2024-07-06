import mongoose from "mongoose";
import dotenv from "dotenv";
import EmotionMemory from "./models/emotionMemoryModel.js";

dotenv.config();

const dbURI = process.env.MONGODB_URI;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log("Error connecting to MongoDB Atlas:", err));

const cards = [
  {
    emotion: "Happy",
    image: "assets/happy1-.jpg",
    audio: "assets/happy.mp3",
  },
  {
    emotion: "Sad",
    image: "assets/sad1.jpg",
    audio: "assets/sad.mp3",
  },
  {
    emotion: "Angry",
    image: "assets/angry1.jpg",
    audio: "assets/angry.mp3",
  },
  {
    emotion: "Laughing",
    image: "assets/laughing3.jpg",
    audio: "assets/happy.mp3",
  },
  {
    emotion: "Crying",
    image: "assets/crying3.jpg",
    audio: "assets/sad.mp3",
  },
  {
    emotion: "Mad",
    image: "assets/angry3.jpg",
    audio: "assets/angry.mp3",
  },

  // Repeat the same objects to create pairs
  /*{
    emotion: "Happy",
    image: "assets/happy.png",
    audio: "assets/happy.mp3",
  },
  {
    emotion: "Sad",
    image: "assets/sad.png",
    audio: "assets/sad.mp3",
  },
  {
    emotion: "Angry",
    image: "assets/angry.png",
    audio: "assets/angry.mp3",
  },
  {
    emotion: "Laughing",
    image: "assets/laughing3.jpg",
    audio: "assets/happy.mp3",
  },
  {
    emotion: "Crying",
    image: "assets/crying3.jpg",
    audio: "assets/sad.mp3",
  },
  {
    emotion: "Mad",
    image: "assets/angry3.jpg",
    audio: "assets/angry.mp3",
  },*/
];

EmotionMemory.insertMany(cards)
  .then(() => {
    console.log("Data inserted");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
  });
