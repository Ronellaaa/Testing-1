import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Confetti from "react-confetti";
import "../style/Game3.css";
import keeptrying from "../assets/try.mp3";
import yay from "../assets/yay.mp3";
import magic from "../assets/magic.jpg";
const BASE_URL = "http://localhost:5001/";

export default function Game3() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState(new Set());
  const [isProcessing, setIsProcessing] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(`${BASE_URL}api/emotion-memory`);
        const data = response.data;
        const duplicatedData = [...data, ...data]; // Duplicate each card for matching pairs
        setCards(shuffleArray(duplicatedData));
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);
  const navigate = useNavigate();

  const goBack = () => {
    console.log("Navigating back to home");
    navigate("/levels");
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleCardClick = (index) => {
    if (
      isProcessing ||
      flippedCards.includes(index) ||
      matchedCards.has(index)
    ) {
      return;
    }

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    playAudio(cards[index].audio).then(() => {
      if (newFlippedCards.length === 2) {
        setIsProcessing(true);
        const [firstIndex, secondIndex] = newFlippedCards;

        if (cards[firstIndex].emotion === cards[secondIndex].emotion) {
          setMatchedCards(new Set([...matchedCards, firstIndex, secondIndex]));
          setShowConfetti(true);
          const audio = new Audio(yay);
          audio.play();

          setTimeout(() => {
            setFlippedCards([]);
            setIsProcessing(false);
            setShowConfetti(false);

            if (matchedCards.size + 2 === cards.length) {
              setGameCompleted(true);
            }
          }, 3000);
        } else {
          const audio = new Audio(keeptrying);
          audio.play();

          setTimeout(() => {
            setFlippedCards([]);
            setIsProcessing(false);
          }, 3500);
        }
      }
    });
  };

  const playAudio = (audioFile) => {
    return new Promise((resolve) => {
      if (audioFile) {
        const audioUrl = `${BASE_URL}${audioFile.replace(/^\//, "")}`;
        const audio = new Audio(audioUrl);

        audio
          .play()
          .then(resolve)
          .catch((error) => {
            console.error("Error playing audio:", error);
            resolve(); // Resolve the promise even if there's an error
          });
      } else {
        console.error("Audio file is not defined");
        resolve(); // Resolve the promise if there's no audio file
      }
    });
  };

  const resetGame = () => {
    setCards(shuffleArray([...cards]));
    setFlippedCards([]);
    setMatchedCards(new Set());
    setIsProcessing(false);
    setShowConfetti(false);
    setGameCompleted(false);
  };

  if (!cards.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="game3-container">
      <button className="close-btn" onClick={goBack}>
        X
      </button>
      <h1 className="game3">Memory Card Matching Game</h1>

      <img src={magic} className="bg-img" alt="" />
      {showConfetti && <Confetti />}
      <div className="card-grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${
              flippedCards.includes(index) || matchedCards.has(index)
                ? "flipped"
                : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img src={`${BASE_URL}${card.image}`} alt={card.emotion} />
              </div>
              <div className="card-back"></div>
            </div>
          </div>
        ))}
      </div>
      {gameCompleted && (
        <div className="completed-game ">
          <h2>Congratulations! You've matched all pairs! 🎉</h2>
          <button onClick={resetGame} className="retry-button ">
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
