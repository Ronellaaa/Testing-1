import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import RewardPic from "../assets/rewardsBackground.jpg";
import trophyImage from "../assets/trophy.png"; // Import the trophy image
import "../style/Reward.css";

export default function RewardSystem() {
  const navigate = useNavigate();
  const location = useLocation();
  const { rewards } = location.state || { rewards: [] };
  const [trophies, setTrophies] = useState([]);
  const [showTrackerBackground, setShowTrackerBackground] = useState(true);

  useEffect(() => {
    const storedTrophies = JSON.parse(localStorage.getItem("trophies")) || [];
    setTrophies(storedTrophies);

    if (rewards.includes("trophy")) {
      setShowTrackerBackground(true);
      const timer = setTimeout(() => {
        setShowTrackerBackground(false);
      }, 2000); // Hide background after 2 seconds
      return () => clearTimeout(timer);
    } else {
      setShowTrackerBackground(false); // Ensure the background is hidden if no new rewards
    }
  }, []); // Dependency array is empty to run only once on mount

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="reward-container">
      <button className="close-btn" onClick={goBack}>
        X
      </button>
      <h1>Your Rewards</h1>
      <img src={RewardPic} alt="Reward Background" className="reward-bg" />
      <div
        className={`rewards-tracker ${
          showTrackerBackground ? "visible" : "hidden"
        }`}
      >
        {rewards.includes("trophy") && (
          <div className="reward-item">
            <img src={trophyImage} alt="Trophy" className="trophy-image" />
          </div>
        )}
      </div>
      <div className="trophies-list">
        {trophies.map((trophy, index) => (
          <img
            key={index}
            src={trophyImage}
            alt="Trophy"
            className="small-trophy-image"
          />
        ))}
      </div>
    </div>
  );
}
