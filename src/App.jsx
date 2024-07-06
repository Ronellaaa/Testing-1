/*import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoBackground from "./VideoBackground";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RewardsSystem from "./components/RewardsSystem";
import Levels from "./components/Levels";
import Game1 from "./components/Game1";
function App() {
  const [showRewards, setShowRewards] = useState(false);

  const toggleRewards = () => {
    setShowRewards(!showRewards);
  };
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<VideoBackground />} />
          <Route path="/rewards" element={<RewardsSystem />} />
          <Route path="/levels" element={<Levels />} />
          <Route path="/game1" element={<Game1 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
*/
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoBackground from "./VideoBackground";
import EmotionSelector from "./components/EmotionSelector";
import RewardsSystem from "./components/RewardsSystem";
import Levels from "./components/Levels";
import Game1 from "./components/Game1";
import Game2 from "./components/Game2";
import Game3 from "./components/Game3"; // Import Game3

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VideoBackground />} />
        <Route path="/select-emotion" element={<EmotionSelector />} />
        <Route path="/levels" element={<Levels />} />
        <Route path="/game/:selectedEmotion" element={<Game1 />} />
        <Route path="/game2" element={<Game2 />} /> {/* Add route for Game2 */}
        <Route path="/game3" element={<Game3 />} />
        <Route path="/rewards" element={<RewardsSystem />} />
      </Routes>
    </Router>
  );
}

export default App;
