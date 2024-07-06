import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const HappinessNarrator = () => {
  const location = useLocation();
  const emotion = location.state?.emotion || "happiness";

  const steps = {
    happiness: [
      { message: "Hi there! Let's learn about happiness!", img: "dont.jpeg" },
      {
        message: "Happiness is a feeling of joy and contentment.",
        img: "sadImage.jpg",
      },
      {
        message:
          "You can find happiness in simple things, like playing with a friend.",
        img: "sadImage.jpg",
      },
      { message: "Let's practice smiling together!", img: "anger.jpeg" },
    ],
    sadness: [
      { message: "Hi there! Let's learn about sadness.", img: "sadImage.jpg" },
      {
        message: "Sadness is a feeling of being unhappy or sorrowful.",
        img: "sadImage.jpg",
      },
      {
        message: "You may feel sad when you lose something important.",
        img: "sadImage.jpg",
      },
      { message: "Let's practice expressing sadness.", img: "anger.jpeg" },
    ],
    anger: [
      { message: "Hi there! Let's learn about anger.", img: "anger.jpeg" },
      {
        message: "Anger is a strong feeling of annoyance or hostility.",
        img: "anger.jpeg",
      },
      {
        message: "You may feel angry when something unfair happens.",
        img: "anger.jpeg",
      },
      {
        message: "Let's practice expressing anger appropriately.",
        img: "anger.jpeg",
      },
    ],
  };

  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < steps[emotion].length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <div style={styles.container}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={styles.content}
      >
        <h1 style={styles.message}>{steps[emotion][step].message}</h1>
        <img
          src={steps[emotion][step].img}
          alt="Illustration"
          style={styles.image}
        />
        <button onClick={nextStep} style={styles.button}>
          Next
        </button>
      </motion.div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f8ff",
  },
  content: {
    textAlign: "center",
  },
  message: {
    fontSize: "24px",
    color: "#333",
  },
  image: {
    width: "200px",
    height: "200px",
    margin: "20px 0",
  },
  button: {
    padding: "10px 20px",
    fontSize: "18px",
    cursor: "pointer",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
};

export default HappinessNarrator;
