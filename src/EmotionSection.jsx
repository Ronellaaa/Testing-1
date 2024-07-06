import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./EmotionSection.css";

const EmotionSection = ({ emotionsData, onClickMoment }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const emotion = location.state?.emotion || "happiness";
  const emotionData = emotionsData.find((e) => e.emotion === emotion);

  if (!emotionData) {
    return <div>Loading...</div>;
  }

  const handleBackClick = () => {
    navigate("/introduction", { state: { emotion } });
  };

  const handleExerciseClick = () => {
    navigate("/learn", { state: { emotion } });
  };

  return (
    <div className="emotion-section">
      <h1>{`${emotionData.emotion
        .charAt(0)
        .toUpperCase()}${emotionData.emotion.slice(1)} Moments`}</h1>
      <div className="grid-container">
        {emotionData.moments.slice(0, 10).map((moment) => (
          <div
            className="grid-item"
            key={moment.id}
            onClick={() => onClickMoment(moment)}
          >
            <img src={moment.image} alt={moment.description} />
            <p>{moment.description}</p>
          </div>
        ))}
      </div>
      {emotionData.video && (
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={emotionData.video.videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <div className="button-container">
        <button className="button" onClick={handleBackClick}>
          Back
        </button>
        <button className="button" onClick={handleExerciseClick}>
          Exercise
        </button>
      </div>
    </div>
  );
};

export default EmotionSection;
