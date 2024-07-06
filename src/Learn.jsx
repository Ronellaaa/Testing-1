/*import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import WebcamCapture from "./WebcamCapture";
import AnimatedCharacter from "./AnimatedCharacter";
import Confetti from "react-confetti";
import { emotions } from "./emotions"; // Import emotions from emotions.js
import "./App.css"; // Ensure styles are applied from App.css

// Static imports for assets
import happyExample from "./assets/happy.webp";
import sadExample from "./assets/sad3.webp";
import angryExample from "./assets/sadd.webp";

const assets = {
  happiness: happyExample,
  sadness: sadExample,
  anger: angryExample,
};

const Learn = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [expressions, setExpressions] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [currentScenario, setCurrentScenario] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const currentEmotion = location.state?.emotion || "happiness";

  const emotionData = emotions[currentEmotion];

  useEffect(() => {
    setCurrentScenario(0);
  }, [currentEmotion]);

  const handleCapture = (expressions) => {
    setExpressions(expressions);
    const emotionThreshold = expressions[currentEmotion] > 0.5; // Adjusted threshold

    if (attempts >= 1) {
      setFeedbackMessage(`Great job! You are showing ${currentEmotion}`);
      setShowConfetti(true);
      setAttempts(0);
    } else if (emotionThreshold) {
      setFeedbackMessage(`Great job! You are showing ${currentEmotion}`);
      setShowConfetti(true);
      setAttempts(0);
    } else {
      setFeedbackMessage(
        `Try again, show ${currentEmotion} by reacting appropriately.`
      );
      setAttempts((prev) => prev + 1);
    }
  };

  const handleNextScenario = () => {
    if (emotionData) {
      setCurrentScenario((prev) => (prev + 1) % emotionData.scenarios.length);
      setFeedbackMessage("");
      setExpressions(null);
      setShowConfetti(false);
      setAttempts(0);
    } else {
      console.error(`Emotion data for ${currentEmotion} not found.`);
    }
  };

  const handleTryAgain = () => {
    setImageSrc(null);
    setFeedbackMessage("");
    setShowConfetti(false);
  };

  const handleBackClick = () => {
    navigate("/emotion-section", { state: { emotion: currentEmotion } });
  };

  const handleHomeClick = () => {
    navigate("/");
  };
  if (!emotionData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="centered-content">
      <div className="onella">
        <AnimatedCharacter
          animationData={emotionData.animationData}
          message={emotionData.message}
        />
        <p className="scenario">{emotionData.scenarios[currentScenario]}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <WebcamCapture onCapture={handleCapture} />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <img
              src={assets[currentEmotion]}
              alt={`${currentEmotion} example`}
              style={{ width: "200px", height: "200px" }}
            />
            <p>Look at the picture and try to mimic the expression.😉</p>
          </div>
        </div>
        {feedbackMessage && (
          <div>
            <h1 style={{ fontSize: "2em", color: "green" }}>
              {feedbackMessage}
            </h1>
            {showConfetti && <Confetti />}
          </div>
        )}
        {feedbackMessage.includes("Try again") && attempts < 2 && (
          <button onClick={handleTryAgain} className="try-again">
            Try Again
          </button>
        )}
        <button onClick={handleNextScenario} className="secondary">
          Next Scenario
        </button>
      </div>
      <button className="back-button1" onClick={handleBackClick}>
        Back
      </button>
      <button className="home-button2" onClick={handleHomeClick}>
        Home
      </button>
    </div>
  );
};

export default Learn;
*/
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import WebcamCapture from "./WebcamCapture";
import AnimatedCharacter from "./AnimatedCharacter";
import Confetti from "react-confetti";
import { emotions } from "./emotions"; // Import emotions from emotions.js
import "./App.css"; // Ensure styles are applied from App.css

// Static imports for assets
import happyExample from "./assets/happy.webp";
import sadExample from "./assets/sad3.webp";
import angryExample from "./assets/sadd.webp";

const assets = {
  happiness: happyExample,
  sadness: sadExample,
  anger: angryExample,
};

const Learn = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [expressions, setExpressions] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [currentScenario, setCurrentScenario] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const currentEmotion = location.state?.emotion || "happiness";

  const emotionData = emotions[currentEmotion];

  useEffect(() => {
    setCurrentScenario(0);
  }, [currentEmotion]);

  const handleCapture = (expressions) => {
    setExpressions(expressions);
    const emotionThreshold = expressions[currentEmotion] > 0.5; // Adjusted threshold

    if (attempts >= 1) {
      setFeedbackMessage(`Great job! You are showing ${currentEmotion}`);
      setShowConfetti(true);
      setAttempts(0);
    } else if (emotionThreshold) {
      setFeedbackMessage(`Great job! You are showing ${currentEmotion}`);
      setShowConfetti(true);
      setAttempts(0);
    } else {
      setFeedbackMessage(
        `Try again, show ${currentEmotion} by reacting appropriately.`
      );
      setAttempts((prev) => prev + 1);
    }
  };

  const handleNextScenario = () => {
    if (emotionData) {
      setCurrentScenario((prev) => (prev + 1) % emotionData.scenarios.length);
      setFeedbackMessage("");
      setExpressions(null);
      setShowConfetti(false);
      setAttempts(0);
    } else {
      console.error(`Emotion data for ${currentEmotion} not found.`);
    }
  };

  const handleTryAgain = () => {
    setImageSrc(null);
    setFeedbackMessage("");
    setShowConfetti(false);
  };

  const handleBackClick = () => {
    navigate("/emotion-section", { state: { emotion: currentEmotion } });
  };

  const handleHomeClick = () => {
    navigate("/");
  };
  if (!emotionData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="centered-content">
      <div className="onella">
        <button className="button home-button" onClick={handleHomeClick}>
          X
        </button>
        <button className="button back-button" onClick={handleBackClick}>
          ←
        </button>
        <AnimatedCharacter
          animationData={emotionData.animationData}
          message={emotionData.message}
        />
        <p className="scenario">{emotionData.scenarios[currentScenario]}</p>
        <div className="interaction-area">
          <WebcamCapture onCapture={handleCapture} />
          <div className="example-area">
            <img
              src={assets[currentEmotion]}
              alt={`${currentEmotion} example`}
            />
            <p>Look at the picture and try to mimic the expression.😉</p>
          </div>
        </div>
        {feedbackMessage && (
          <div>
            <h1 className="feedback-message">{feedbackMessage}</h1>
            {showConfetti && <Confetti />}
          </div>
        )}
        {feedbackMessage.includes("Try again") && attempts < 2 && (
          <button onClick={handleTryAgain} className="button try-again">
            Try Again
          </button>
        )}
        <button onClick={handleNextScenario} className="button secondary">
          Next Scenario
        </button>
        <div className="navigation-buttons"></div>
      </div>
    </div>
  );
};

export default Learn;
