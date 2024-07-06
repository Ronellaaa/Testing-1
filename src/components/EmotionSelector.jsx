// src/components/EmotionSelector.js
import React from "react";
import { useNavigate } from "react-router-dom";

const EmotionSelector = () => {
  const navigate = useNavigate();

  const handleEmotionSelect = (emotion) => {
    navigate(`/game/${emotion}`);
  };

  return (
    <div className="emotion-selector-container">
      <h1>Select an Emotion</h1>
      <div className="emotions-container">
        <button onClick={() => handleEmotionSelect("happy")}>Happy</button>
        <button onClick={() => handleEmotionSelect("sad")}>Sad</button>
        <button onClick={() => handleEmotionSelect("angry")}>Angry</button>
      </div>
    </div>
  );
};

export default EmotionSelector;
