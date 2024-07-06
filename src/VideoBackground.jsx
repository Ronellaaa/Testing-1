import React from "react";
import "./style/VideoBackground.css";
import { useNavigate } from "react-router-dom";
import video from "./assets/Background-1.mp4";
import "./style/Button3D.css";

function VideoBackground() {
  const navigate = useNavigate();
  const gotoRewards = () => {
    navigate("/rewards");
  };
  const startGame = () => {
    navigate("/levels");
  };
  return (
    <div className="video-container">
      <video src={video} autoPlay loop muted />
      <div className="heading-game">
        <h1>Guess the Emotion</h1>
      </div>
      <button className="trophy-btn" onClick={gotoRewards}>
        🏆
      </button>
      <div className="start-btn">
        <button
          className="btn btn-primary btn-3d btn-start"
          onClick={startGame}
        >
          Start
        </button>
        <button className="btn btn-primary btn-3d btn-help">Help</button>
      </div>
    </div>
  );
}

export default VideoBackground;
