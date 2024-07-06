import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VirtualTeacher from "./VirtualTeacher";
import EmotionSection from "./EmotionSection";
import Firstpage from "./Firstpage";
import Learn from "./Learn";
import Introduction from "./Introduction";
import SpeechBubble from "./SpeechBubble";
import "./App.css";

const App = () => {
  const [emotionsData, setEmotionsData] = useState([]);
  const [currentMoment, setCurrentMoment] = useState(null);

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
      </Routes>
    </Router>
  );
};

export default App;
