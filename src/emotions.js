// src/emotions.js

// animationData: require("./animation.json"), // Update with actual path

// Import the animation JSON files
import sameAnimation from "./animation.json";

export const emotions = {
  happiness: {
    message: "What face do yo make when today we will learn about happiness!",
    scenarios: [
      "What face do yo make when you received a gift from your friend?",
      "What face do yo make when you won a game?",
      "What face do yo make when your parents praised you?",
    ],
    animationData: sameAnimation,
  },
  sadness: {
    message: "Today we will learn about sadness.",
    scenarios: [
      "What face do yo make when your favorite toy broke?",
      "What face do yo make when you lost a game?",
      "What face do yo make when you missed your friend?",
    ],
    animationData: sameAnimation,
  },
  anger: {
    message: "Today we will learn about anger?",
    scenarios: [
      "What face do yo make when someone took your toy?",
      "What face do yo make when you lost your favorite item?",
      "What face do yo make when you had a bad day?",
    ],
    animationData: sameAnimation,
  },
};
