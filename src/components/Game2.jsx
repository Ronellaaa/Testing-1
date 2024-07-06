/*import React, { useState, useEffect } from "react";
import axios from "axios";
import bgVideo from "../assets/kidsplayground_animation.mp4";
import "../style/Game2.css"; // Create a new CSS file for EmotionPlayground styles

const BASE_URL = "http://localhost:5001/";

export default function Game2() {
  const [characters, setCharacters] = useState([]);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [animate, setAnimate] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/emotion-playground`
        );
        setCharacters(response.data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  const handleEmotionClick = (selectedEmotion) => {
    const currentCharacter = characters[currentCharacterIndex];
    if (selectedEmotion === currentCharacter.correctEmotion) {
      setCorrectAnswers(correctAnswers + 1);
      setFeedback("Great job! 🎉");
      setAnimate(true);

      setTimeout(() => {
        if (currentCharacterIndex < characters.length - 1) {
          setCurrentCharacterIndex(currentCharacterIndex + 1);
          setFeedback("");
          setAnimate(false);
        } else {
          setGameCompleted(true);
        }
      }, 2000);
    } else {
      setFeedback("Try again! 💪");
      setAnimate("animate__shakeX");
    }
  };

  const currentCharacter = characters[currentCharacterIndex];

  if (!characters.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="playground-container">
      <video className="bg-video" src={bgVideo} autoPlay loop muted></video>
      <div className="content">
        {gameCompleted ? (
          <div className="completed-game">
            <h2>Congratulations! You've completed the game 🎉</h2>
            <p>You recognized all the emotions correctly!</p>
          </div>
        ) : (
          <>
            <div className="scenario-container">
              <p>{currentCharacter.scenario}</p>
            </div>
            <img
              src={`${BASE_URL}${currentCharacter.image.replace(/^\//, "")}`}
              alt={currentCharacter.character}
              className="character-image"
            />
            <div className="emotions-container">
              {currentCharacter.options.map((emotion, index) => (
                <button
                  key={index}
                  className={`emotion-button ${
                    animate ? "animate__animated animate__bounce" : ""
                  }`}
                  onClick={() => handleEmotionClick(emotion)}
                >
                  {emotion}
                </button>
              ))}
            </div>
            <div className="feedback">{feedback}</div>
          </>
        )}
      </div>
    </div>
  );
}
*/
/*
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Confetti from "react-confetti";
import bgVideo from "../assets/kidsplayground_animation.mp4";
import "../style/Game2.css";
import keeptrying from "../assets/try.mp3";
import yay from "../assets/yay.mp3";

const BASE_URL = "http://localhost:5001/";

export default function Game2() {
  const [characters, setCharacters] = useState([]);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [animate, setAnimate] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [disabledButtons, setDisabledButtons] = useState(new Set());

  const navigate = useNavigate();

  const goBack = () => {
    console.log("Navigating back to home");
    navigate("/levels");
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/emotion-playground`
        );
        setCharacters(response.data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    if (characters.length > 0 && characters[currentCharacterIndex].audio) {
      playAudio(characters[currentCharacterIndex].audio);
    }
  }, [currentCharacterIndex, characters]);

  const playAudio = (audioFile) => {
    if (audioFile) {
      const audioUrl = `${BASE_URL}${audioFile.replace(/^\//, "")}`;
      const audio = new Audio(audioUrl);

      audio
        .play()
        .catch((error) => console.error("Error playing audio:", error));
    } else {
      console.error("Audio file is not defined");
    }
  };

  const handleEmotionClick = (selectedEmotion, index) => {
    const currentCharacter = characters[currentCharacterIndex];
    if (selectedEmotion === currentCharacter.correctEmotion) {
      setCorrectAnswers(correctAnswers + 1);
      setFeedback("Great job! 🎉");
      setAnimate(true);
      setShowConfetti(true);
      setDisabledButtons(new Set());
      const audio = new Audio(yay);
      audio.play();

      setTimeout(() => {
        setShowConfetti(false);
        if (currentCharacterIndex < characters.length - 1) {
          setCurrentCharacterIndex(currentCharacterIndex + 1);
          setFeedback("");
          setAnimate(false);
        } else {
          setGameCompleted(true);
        }
      }, 2500);
    } else {
      setFeedback("Try again! 💪");
      setAnimate("animate__shakeX");
      setDisabledButtons((prevSet) => new Set(prevSet).add(index));
      const audio = new Audio(keeptrying);
      audio.play();
    }
  };

  const handleRetry = () => {
    setCurrentCharacterIndex(0);
    setGameCompleted(false);
    setCorrectAnswers(0);
    setFeedback("");
    setAnimate(false);
    setDisabledButtons(new Set());
  };

  const viewRewards = () => {
    navigate("/rewards", { state: { rewards: ["trophy"] } });
  };

  const currentCharacter = characters[currentCharacterIndex];

  if (!characters.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="playground-container">
      <button className="close-btn1" onClick={goBack}>
        ←
      </button>
      <h1 className="game2-h1">Emotion Playground</h1>
      {showConfetti && <Confetti />}

      <video className="bg-video" src={bgVideo} autoPlay loop muted></video>

      <div className="content">
        {gameCompleted ? (
          <div className="completed-game">
            <h2>Congratulations! You've completed the game 🎉</h2>
            <p>You recognized all the emotions correctly!</p>
            <button className="retry-button" onClick={handleRetry}>
              Retry
            </button>
            <button className="view-rewards-button" onClick={viewRewards}>
              View Rewards
            </button>
          </div>
        ) : (
          <>
            <div className="scenario-container">
              <p>{currentCharacter.scenario}</p>
            </div>
            <img
              src={`${BASE_URL}${currentCharacter.image.replace(/^\//, "")}`}
              alt={currentCharacter.character}
              className="character-image"
            />
            <div className="emotions-container">
              {currentCharacter.options.map((emotion, index) => (
                <button
                  key={index}
                  className={`emotion-button ${
                    animate ? "animate__animated animate__bounce" : ""
                  }`}
                  onClick={() => handleEmotionClick(emotion, index)}
                  disabled={disabledButtons.has(index)}
                >
                  {emotion}
                </button>
              ))}
            </div>
            <div className="feedback">{feedback}</div>
          </>
        )}
      </div>
    </div>
  );
}
*/
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Confetti from "react-confetti";
import bgVideo from "../assets/kidsplayground_animation.mp4";
import "../style/Game2.css";
import keeptrying from "../assets/try.mp3";
import yay from "../assets/yay.mp3";

const BASE_URL = "http://localhost:5001/";

export default function Game2() {
  const [characters, setCharacters] = useState([]);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [animate, setAnimate] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [disabledButtons, setDisabledButtons] = useState(new Set());

  const navigate = useNavigate();

  const goBack = () => {
    console.log("Navigating back to home");
    navigate("/levels");
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/emotion-playground`
        );
        setCharacters(response.data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    if (characters.length > 0 && characters[currentCharacterIndex].audio) {
      playAudio(characters[currentCharacterIndex].audio);
    }
  }, [currentCharacterIndex, characters]);

  const playAudio = (audioFile) => {
    if (audioFile) {
      const audioUrl = `${BASE_URL}${audioFile.replace(/^\//, "")}`;
      const audio = new Audio(audioUrl);

      audio
        .play()
        .catch((error) => console.error("Error playing audio:", error));
    } else {
      console.error("Audio file is not defined");
    }
  };

  const handleEmotionClick = (selectedEmotion, index) => {
    const currentCharacter = characters[currentCharacterIndex];
    if (selectedEmotion === currentCharacter.correctEmotion) {
      setCorrectAnswers(correctAnswers + 1);
      setFeedback("Great job! 🎉");
      setAnimate(true);
      setShowConfetti(true);
      setDisabledButtons(new Set());
      const audio = new Audio(yay);
      audio.play();

      setTimeout(() => {
        setShowConfetti(false);
        if (currentCharacterIndex < characters.length - 1) {
          setCurrentCharacterIndex(currentCharacterIndex + 1);
          setFeedback("");
          setAnimate(false);
        } else {
          setGameCompleted(true);
        }
      }, 2500);
    } else {
      setFeedback("Try again! 💪");
      setAnimate("animate__shakeX");
      setDisabledButtons((prevSet) => new Set(prevSet).add(index));
      const audio = new Audio(keeptrying);
      audio.play();
    }
  };

  const handleRetry = () => {
    setCurrentCharacterIndex(0);
    setGameCompleted(false);
    setCorrectAnswers(0);
    setFeedback("");
    setAnimate(false);
    setDisabledButtons(new Set());
  };

  const viewRewards = () => {
    navigate("/rewards", { state: { rewards: ["trophy"] } });
  };

  const currentCharacter = characters[currentCharacterIndex];

  if (!characters.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="playground-container">
      <button className="close-btn1" onClick={goBack}>
        ←
      </button>
      <h1 className="game2-h1">Emotion Playground</h1>
      {showConfetti && <Confetti />}

      <video className="bg-video" src={bgVideo} autoPlay loop muted></video>

      <div className="content">
        {gameCompleted ? (
          <div className="completed-game">
            <h2>Congratulations! You've completed the game 🎉</h2>
            <p>You recognized all the emotions correctly!</p>
            <button className="retry-button" onClick={handleRetry}>
              Retry
            </button>
            <button className="view-rewards-button" onClick={viewRewards}>
              View Rewards
            </button>
          </div>
        ) : (
          <>
            <div className="scenario-container">
              <p>{currentCharacter.scenario}</p>
            </div>
            <img
              src={`${BASE_URL}${currentCharacter.image.replace(/^\//, "")}`}
              alt={currentCharacter.character}
              className="character-image"
            />
            <div className="emotions-container">
              {currentCharacter.options.map((emotion, index) => (
                <button
                  key={index}
                  className={`emotion-button ${
                    animate ? "animate__animated animate__bounce" : ""
                  }`}
                  onClick={() => handleEmotionClick(emotion, index)}
                  disabled={disabledButtons.has(index)}
                >
                  {emotion}
                </button>
              ))}
            </div>
            <div className="feedback">{feedback}</div>
          </>
        )}
      </div>
    </div>
  );
}
