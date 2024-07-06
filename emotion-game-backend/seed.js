/*import mongoose from "mongoose";
import Emotion from "./emotionModel.js"; // Import the Emotion model

const dbURI =
  "mongodb+srv://ronelladias:BKuX0B6qU1rLwIkN@emotiongamecluster.vwhyf3a.mongodb.net/?retryWrites=true&w=majority&appName=EmotionGameCluster";

mongoose
  .connect(dbURI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log("Error connecting to MongoDB Atlas:", err));

const emotions = [
  {
    type: "happy",
    levels: [
      {
        image: "/assets/laughing.jpg",
        correct: "/assets/happy1-.jpg",
        options: [
          "/assets/happy1-.jpg",
          "/assets/sad1.jpg",
          "/assets/angry1.jpg",
        ],
        video: "assets/goodjob.mp4",
      },
      {
        image: "/assets/laughing2.jpg",
        correct: "/assets/happy1-.jpg",
        options: [
          "/assets/happy1-.jpg",
          "/assets/sad1.jpg",
          "/assets/angry1.jpg",
        ],
        video: "assets/welldone.mp4",
      },
      {
        image: "/assets/laughing3.jpg",
        correct: "/assets/happy1-.jpg",
        options: [
          "/assets/happy1-.jpg",
          "/assets/sad1.jpg",
          "/assets/angry1.jpg",
        ],
        video: "assets/welldone.mp4",
      },
      {
        image: "/assets/laughing4.jpg",
        correct: "/assets/happy1-.jpg",
        options: [
          "/assets/happy1-.jpg",
          "/assets/sad1.jpg",
          "/assets/angry1.jpg",
        ],
        video: "assets/goodjob.mp4",
      },
      {
        image: "/assets/laughing5.jpg",
        correct: "/assets/happy1-.jpg",
        options: [
          "/assets/happy1-.jpg",
          "/assets/sad1.jpg",
          "/assets/angry1.jpg",
        ],
        video: "assets/welldone.mp4",
      },
    ],
  },
  {
    type: "sad",
    levels: [
      {
        image: "/assets/crying.jpg",
        correct: "/assets/sad1.jpg",
        options: [
          "/assets/happy1-.jpg",
          "/assets/sad1.jpg",
          "/assets/angry1.jpg",
        ],
        video: "assets/welldone.mp4",
      },
      {
        image: "/assets/crying2.jpg",
        correct: "/assets/sad1.jpg",
        options: [
          "/assets/happy1-.jpg",
          "/assets/sad1.jpg",
          "/assets/angry1.jpg",
        ],
        video: "assets/keephoing.mp4",
      },
      {
        image: "/assets/crying3.jpg",
        correct: "/assets/sad1.jpg",
        options: [
          "/assets/happy1-.jpg",
          "/assets/sad1.jpg",
          "/assets/angry1.jpg",
        ],
        video: "assets/goodjob.mp4",
      },
      {
        image: "/assets/crying4.jpg",
        correct: "/assets/sad1.jpg",
        options: [
          "/assets/happy1-.jpg",
          "/assets/sad1.jpg",
          "/assets/angry1.jpg",
        ],
        video: "assets/welldone.mp4",
      },
      {
        image: "/assets/crying5.jpg",
        correct: "/assets/sad1.jpg",
        options: [
          "/assets/happy1-.jpg",
          "/assets/sad1.jpg",
          "/assets/angry1.jpg",
        ],
        video: "assets/keephoing.mp4",
      },
    ],
  },
  {
    type: "angry",
    levels: [
      {
        image: "/assets/angrykid.jpg",
        correct: "/assets/angry1.jpg",
        options: [
          "/assets/happy1-.jpg",
          "/assets/sad1.jpg",
          "/assets/angry1.jpg",
        ],
        video: "assets/welldone.mp4",
      },
      {
        image: "/assets/angry2.jpg",
        correct: "/assets/angry1.jpg",
        options: [
          "/assets/happy1-.jpg",
          "/assets/sad1.jpg",
          "/assets/angry1.jpg",
        ],
        video: "assets/keephoing.mp4",
      },
      {
        image: "/assets/angry3.jpg",
        correct: "/assets/angry1.jpg",
        options: [
          "/assets/happy1-.jpg",
          "/assets/sad1.jpg",
          "/assets/angry1.jpg",
        ],
        video: "assets/goodjob.mp4",
      },
      {
        image: "/assets/angry4.jpg",
        correct: "/assets/angry1.jpg",
        options: [
          "/assets/happy1-.jpg",
          "/assets/sad1.jpg",
          "/assets/angry1.jpg",
        ],
        video: "assets/keephoing.mp4",
      },
      {
        image: "/assets/angry5.jpg",
        correct: "/assets/angry1.jpg",
        options: [
          "/assets/happy1-.jpg",
          "/assets/sad1.jpg",
          "/assets/angry1.jpg",
        ],
        video: "assets/goodjob.mp4",
      },
    ],
  },
];

Emotion.insertMany(emotions)
  .then(() => {
    console.log("Data inserted");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
  });
*/
import mongoose from "mongoose";
import Emotion from "./emotionModel.js"; // Import the Emotion model

const dbURI =
  "mongodb+srv://ronelladias:BKuX0B6qU1rLwIkN@emotiongamecluster.vwhyf3a.mongodb.net/?retryWrites=true&w=majority&appName=EmotionGameCluster";

mongoose
  .connect(dbURI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log("Error connecting to MongoDB Atlas:", err));

const emotions = [
  {
    type: "happy",
    levels: [
      {
        image: "assets/laughing.jpg",
        correct: "assets/happy1-.jpg",
        options: ["assets/happy1-.jpg", "assets/sad1.jpg", "assets/angry1.jpg"],
        video: "assets/goodjob.mp4",
      },
      {
        image: "assets/laughing2.jpg",
        correct: "assets/happy1-.jpg",
        options: ["assets/happy1-.jpg", "assets/sad1.jpg", "assets/angry1.jpg"],
        video: "assets/welldone.mp4",
      },
      {
        image: "assets/laughing3.jpg",
        correct: "assets/happy1-.jpg",
        options: ["assets/happy1-.jpg", "assets/sad1.jpg", "assets/angry1.jpg"],
        video: "assets/welldone.mp4",
      },
      {
        image: "assets/laughing4.jpg",
        correct: "assets/happy1-.jpg",
        options: ["assets/happy1-.jpg", "assets/sad1.jpg", "assets/angry1.jpg"],
        video: "assets/goodjob.mp4",
      },
      {
        image: "assets/laughing5.jpg",
        correct: "assets/happy1-.jpg",
        options: ["assets/happy1-.jpg", "assets/sad1.jpg", "assets/angry1.jpg"],
        video: "assets/welldone.mp4",
      },
    ],
  },
  {
    type: "sad",
    levels: [
      {
        image: "assets/crying.jpg",
        correct: "assets/sad1.jpg",
        options: ["assets/happy1-.jpg", "assets/sad1.jpg", "assets/angry1.jpg"],
        video: "assets/welldone.mp4",
      },
      {
        image: "assets/crying2.jpg",
        correct: "assets/sad1.jpg",
        options: ["assets/happy1-.jpg", "assets/sad1.jpg", "assets/angry1.jpg"],
        video: "assets/keephoing.mp4",
      },
      {
        image: "assets/crying3.jpg",
        correct: "assets/sad1.jpg",
        options: ["assets/happy1-.jpg", "assets/sad1.jpg", "assets/angry1.jpg"],
        video: "assets/goodjob.mp4",
      },
      {
        image: "assets/crying4.jpg",
        correct: "assets/sad1.jpg",
        options: ["assets/happy1-.jpg", "assets/sad1.jpg", "assets/angry1.jpg"],
        video: "assets/welldone.mp4",
      },
      {
        image: "assets/crying5.jpg",
        correct: "assets/sad1.jpg",
        options: ["assets/happy1-.jpg", "assets/sad1.jpg", "assets/angry1.jpg"],
        video: "assets/keephoing.mp4",
      },
    ],
  },
  {
    type: "angry",
    levels: [
      {
        image: "assets/angrykid.jpg",
        correct: "assets/angry1.jpg",
        options: ["assets/happy1-.jpg", "assets/sad1.jpg", "assets/angry1.jpg"],
        video: "assets/welldone.mp4",
      },
      {
        image: "assets/angry2.jpg",
        correct: "assets/angry1.jpg",
        options: ["assets/happy1-.jpg", "assets/sad1.jpg", "assets/angry1.jpg"],
        video: "assets/keephoing.mp4",
      },
      {
        image: "assets/angry3.jpg",
        correct: "/assets/angry1.jpg",
        options: ["assets/happy1-.jpg", "assets/sad1.jpg", "assets/angry1.jpg"],
        video: "assets/goodjob.mp4",
      },
      {
        image: "assets/angry4.jpg",
        correct: "assets/angry1.jpg",
        options: ["assets/happy1-.jpg", "assets/sad1.jpg", "assets/angry1.jpg"],
        video: "assets/keephoing.mp4",
      },
      {
        image: "assets/angry5.jpg",
        correct: "assets/angry1.jpg",
        options: ["assets/happy1-.jpg", "assets/sad1.jpg", "assets/angry1.jpg"],
        video: "assets/goodjob.mp4",
      },
    ],
  },
];

Emotion.insertMany(emotions)
  .then(() => {
    console.log("Data inserted");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
  });
