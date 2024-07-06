import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import emotion1 from "./emotion1.json";
import "./components/introduction.css";
import { confetti } from "tsparticles-confetti";
import happyBackground from "./assets/dont.jpeg";
import sadBackground from "./assets/sadImage.jpg";
import angerBackground from "./assets/anger.jpeg";
import happyVideo from "./assets/cutecat (online-video-cutter.com) (1).mp4";
import sadVideo from "./assets/reminder1 (online-video-cutter.com).mp4";
import angerVideo from "./assets/reminder3 (online-video-cutter.com).mp4";

const assets = {
  "dont.jpeg": happyBackground,
  "sadImage.jpg": sadBackground,
  "anger.jpeg": angerBackground,
  "cutecat (online-video-cutter.com) (1).mp4": happyVideo,
  "reminder1 (online-video-cutter.com).mp4": sadVideo,
  "reminder3 (online-video-cutter.com).mp4": angerVideo,
};

const Introduction = ({ onEmotionSelect }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const [emotionData, setEmotionData] = useState(null);

  useEffect(() => {
    const emotion = location.state?.emotion || "happiness";
    console.log("Emotion received:", emotion);
    const data = emotion1.find((e) => e.emotion === emotion);
    console.log("Data found:", data);
    setEmotionData(data);
  }, [location.state?.emotion]);

  const handleNextClick = () => {
    navigate("/next");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleNextClick1 = () => {
    const emotion = location.state?.emotion || "happiness";
    navigate("/speech", { state: { emotion } });
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
    if (!showPopup) {
      shootConfetti();
    }
  };

  const shootConfetti = () => {
    const defaults = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: ["star"],
      colors: ["#FFE400", "#FFBD00", "#E89400", "#FFCA6C", "#FDFFB8"],
    };

    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ["star"],
      });

      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 0.75,
        shapes: ["circle"],
      });
    };

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  };

  if (!emotionData) {
    return <div>Loading...</div>;
  }

  const handleNextClick2 = () => {
    const emotion = location.state?.emotion || "happiness";
    onEmotionSelect(emotion);
    navigate("/emotion-section", { state: { emotion } });
  };

  const handleEmotionSectionClick = () => {
    navigate("/emotion-section", { state: { emotion: emotionData.emotion } });
  };

  return (
    <div
      className="introduction-container"
      style={{ backgroundImage: `url(${assets[emotionData.backgroundImage]})` }}
    >
      <h1 className="headingIntro">
        Understanding Emotions - A Journey to Expressing Feelings
      </h1>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={emotionData.youtubeVideo}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <button className="next-button2" onClick={handleEmotionSectionClick}>
        <span className="arrow">→</span>
      </button>
      <button className="next-button1" onClick={handleNextClick1}>
        <span className="arrow1">←</span>
      </button>

      <button className="next-button3" onClick={togglePopup}>
        <span className="video1">SURPRISE🥳</span>
      </button>
      <button className="home-button2" onClick={handleHomeClick}>
        Home
      </button>

      {showPopup && (
        <div className="popup">
          <div className="popuptext show" id="myPopup">
            <video width="560" height="315" controls>
              <source src={assets[emotionData.video]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button className="close-button" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Introduction;
