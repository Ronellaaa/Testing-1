import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import bgVideo from "../assets/bg.mp4";
import wrongAnswerSound from "../assets/keeptrying.mp3";
import "../style/Game1.css";
import "animate.css";
import trophyImage from "../assets/trophy.png";

const BASE_URL = "http://localhost:5001/";

export default function Game1() {
  const { selectedEmotion } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [animate, setAnimate] = useState(false);
  const [showVideo, setShowVideo] = useState(null);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [disabledButtons, setDisabledButtons] = useState(new Set());

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/emotions/${selectedEmotion}`
        );
        console.log("Fetched questions:", response.data.levels); // Log the response to check if data is received
        setQuestions(response.data.levels);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, [selectedEmotion]);

  useEffect(() => {
    console.log("Current questions:", questions); // Log the questions to ensure they are set
  }, [questions]);

  const handleAnswerClick = (option, index) => {
    const currentQuestion = questions[currentQuestionIndex];
    console.log("Option clicked:", option); // Log the option clicked
    console.log("Correct option:", currentQuestion.correct); // Log the correct option
    if (option === currentQuestion.correct) {
      const videoToShow = `${BASE_URL}${currentQuestion.video}`;
      console.log("Video to show:", videoToShow); // Log the video URL

      if (videoToShow) {
        setShowVideo(videoToShow);
      }

      setCorrectAnswers((prevCount) => prevCount + 1);

      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          setFeedback("");
          setAnimate(false);
          setDisabledButtons(new Set());
        } else {
          setGameCompleted(true);
          let trophies = JSON.parse(localStorage.getItem("trophies")) || [];
          trophies.push("trophy");
          localStorage.setItem("trophies", JSON.stringify(trophies));
        }
      }, 3000);
    } else {
      setFeedback("Keep going 💪🏽");
      setAnimate("animate__heartBeat");

      const audio = new Audio(wrongAnswerSound);
      audio.play();

      setDisabledButtons((prevSet) => new Set(prevSet).add(index));

      setTimeout(() => setAnimate(false), 1000);
    }
  };

  const handleVideoEnd = () => {
    setShowVideo(null);
  };

  const handleCloseVideo = () => {
    setShowVideo(null);
    const videoElement = document.getElementById("celebrationVideo");
    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setGameCompleted(false);
    setCorrectAnswers(0);
    setFeedback("");
    setAnimate(false);
    setDisabledButtons(new Set());
  };

  const viewRewards = () => {
    navigate("/rewards", { state: { rewards: ["trophy"] } });
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (!questions.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="game-container">
      <button className="close-btn" onClick={goBack}>
        X
      </button>
      <video className="bg-video" src={bgVideo} autoPlay loop muted></video>
      <div className="content">
        <h1 className="heading heading1">Identify the Emotion</h1>
        {gameCompleted ? (
          <div className="completed-game">
            <img src={trophyImage} alt="Trophy" className="trophy-image" />
            <h2>Congratulations! You've completed the game🎉🎉</h2>
            <button className="retry-button" onClick={handleRetry}>
              Retry
            </button>
            <button className="view-rewards-button" onClick={viewRewards}>
              View Rewards
            </button>
          </div>
        ) : (
          <>
            <img
              src={`${BASE_URL}${currentQuestion.image.replace(/^\//, "")}`} // Remove leading slash
              alt="Emotion"
              className="emotion-image"
              onError={(e) =>
                console.error(`Error loading image: ${e.target.src}`)
              } // Log image loading errors
            />
            <div className="options-container">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className="option-button"
                  onClick={() => handleAnswerClick(option, index)}
                  disabled={disabledButtons.has(index)}
                >
                  <img
                    src={`${BASE_URL}${option.replace(/^\//, "")}`} // Remove leading slash
                    alt="Option"
                    className="option-image"
                    onError={(e) =>
                      console.error(`Error loading image: ${e.target.src}`)
                    } // Log image loading errors
                  />
                </button>
              ))}
            </div>
            <div
              className={`feedback ${
                animate ? `animate__animated ${animate}` : ""
              }`}
            >
              {feedback}
            </div>
          </>
        )}

        {showVideo && (
          <div className="video-overlay">
            <video
              id="celebrationVideo"
              className="celebration-video"
              src={showVideo}
              autoPlay
              onEnded={handleVideoEnd}
            />
            <button className="close-video-btn" onClick={handleCloseVideo}>
              X
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
