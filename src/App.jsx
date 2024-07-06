import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import VirtualTeacher from "./VirtualTeacher";
import EmotionSection from "./EmotionSection";
import Firstpage from "./Firstpage";
import Learn from "./Learn";
import Introduction from "./Introduction";
import SpeechBubble from "./SpeechBubble";
import VideoBackground from "./VideoBackground";
import RewardsSystem from "./components/RewardsSystem";
import Levels from "./components/Levels";
import Game1 from "./components/Game1";
import Game2 from "./components/Game2"; // Import Game2
import Game3 from "./components/Game3"; // Import Game3
import EmotionSelector from "./components/EmotionSelector";
import "./App.css";

const App = () => {
  const [emotionsData, setEmotionsData] = useState([]);
  const [currentMoment, setCurrentMoment] = useState(null);
  const [showRewards, setShowRewards] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => setEmotionsData(data.emotions))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleRewards = () => {
    setShowRewards(!showRewards);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/speech" element={<SpeechBubble />} />
        <Route
          path="/emotion-section"
          element={
            <EmotionSection
              emotionsData={emotionsData}
              onClickMoment={setCurrentMoment}
            />
          }
        />
        <Route path="/next" element={<Introduction />} />
        <Route path="/video-background" element={<VideoBackground />} />
        <Route path="/select-emotion" element={<EmotionSelector />} />
        <Route path="/levels" element={<Levels />} />
        <Route path="/game/:selectedEmotion" element={<Game1 />} />
        <Route path="/game2" element={<Game2 />} />
        <Route path="/game3" element={<Game3 />} />
        <Route path="/rewards" element={<RewardsSystem />} />
      </Routes>
    </Router>
  );
};

export default App;
