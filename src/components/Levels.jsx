/*import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Levels.css";
import swingingGirl from "../assets/girlSwinging.png";

export default function Levels() {
  const navigate = useNavigate();
  const [isLevel1Completed, setIsLevel1Completed] = useState(false);
  useEffect(() => {
    const level1Completed = localStorage.getItem("level1Completed") === "true";
    setIsLevel1Completed(level1Completed);
  }, []);

  const gotoBack = () => {
    navigate("/");
  };
  const goToLevel = (level) => {
    if (level === 1) {
      navigate("/game");
    } else if (level === 2 && isLevel1Completed) {
      // Navigate to Level 2
    } else if (level === 3 && isLevel1Completed) {
      // Navigate to Level 3
    }
  };

  return (
    <div className="levels-container">
      <button className="close-btn" onClick={gotoBack}>
        X
      </button>
      <h1 className="levels-heading">Choose Your Level</h1>
      <img src={swingingGirl} alt="" className="sidePic" />
      <div className="levels-buttons">
        <button className="level-button" onClick={() => goToLevel(1)}>
          Level 1
        </button>
        <button
          className="level-button"
          onClick={() => goToLevel(2)}
          disabled={!isLevel1Completed}
        >
          Level 2
        </button>
        <button
          className="level-button"
          onClick={() => goToLevel(3)}
          disabled={!isLevel1Completed}
        >
          Level 3
        </button>
      </div>
    </div>
  );
}
*/
// src/components/Levels.js

/*import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../style/Levels.css";
import swingingGirl from "../assets/girlSwinging.png";

export default function Levels() {
  const navigate = useNavigate();
  const [isLevel1Completed, setIsLevel1Completed] = useState(false);

  useEffect(() => {
    const level1Completed = localStorage.getItem("level1Completed") === "true";
    setIsLevel1Completed(level1Completed);
  }, []);

  const gotoBack = () => {
    navigate("/");
  };

  const goToLevel = (level) => {
    if (level === 1) {
      navigate("/select-emotion");
    } else if (level === 2 && isLevel1Completed) {
      // Navigate to Level 2
    } else if (level === 3 && isLevel1Completed) {
      // Navigate to Level 3
    }
  };

  const startGame = (emotion) => {
    navigate(`/game/${emotion}`);
  };

  return (
    <div className="levels-container">
      <button className="close-btn" onClick={gotoBack}>
        X
      </button>
      <h1 className="levels-heading">Choose Your Level</h1>
      <img src={swingingGirl} alt="" className="sidePic" />
      <div className="levels-buttons">
        <button className="level-button" onClick={() => startGame("happy")}>
          Level 1 (Happy)
        </button>
        <button
          className="level-button"
          onClick={() => startGame("sad")}
          disabled={!isLevel1Completed}
        >
          Level 2 (Sad)
        </button>
        <button
          className="level-button"
          onClick={() => startGame("angry")}
          disabled={!isLevel1Completed}
        >
          Level 3 (Angry)
        </button>
      </div>
    </div>
  );
}*/
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../style/Levels.css";
import swingingGirl from "../assets/girlSwinging.png";

export default function Levels() {
  const navigate = useNavigate();
  const [isLevel1Completed, setIsLevel1Completed] = useState(false);

  useEffect(() => {
    const level1Completed = localStorage.getItem("level1Completed") === "true";
    setIsLevel1Completed(level1Completed);
  }, []);

  const gotoBack = () => {
    navigate("/");
  };

  const goToLevel = (level) => {
    if (level === 1) {
      navigate("/select-emotion");
    } else if (level === 2 && isLevel1Completed) {
      // Navigate to Level 2
    } else if (level === 3 && isLevel1Completed) {
      // Navigate to Level 3
    }
  };

  const startGame = (emotion) => {
    navigate(`/game/${emotion}`);
  };

  const startGame2 = () => {
    navigate("/game2");
  };
  const startMemoryGame = () => {
    navigate("/game3");
  };
  return (
    <div className="levels-container">
      <button className="close-btn" onClick={gotoBack}>
        X
      </button>
      <h1 className="levels-heading">Choose Your Level</h1>
      <img src={swingingGirl} alt="" className="sidePic" />
      <div className="levels-buttons">
        <button className="level-button" onClick={() => startGame("happy")}>
          Level 1 (Happy)
        </button>
        <button
          className="level-button"
          onClick={() => startGame("sad")}
          disabled={!isLevel1Completed}
        >
          Level 2 (Sad)
        </button>
        <button
          className="level-button"
          onClick={() => startGame("angry")}
          disabled={!isLevel1Completed}
        >
          Level 3 (Angry)
        </button>
        <button className="level-button" onClick={startGame2}>
          Emotion Playground
        </button>
        <button className="level-button" onClick={startMemoryGame}>
          Emotion Memory
        </button>
      </div>
    </div>
  );
}
