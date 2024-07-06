import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";

const WebcamCapture = ({ onCapture }) => {
  const [isCameraOn, setIsCameraOn] = useState(false);
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      onCapture(imageSrc);
    }
  }, [webcamRef, onCapture]);

  const handleCameraToggle = () => {
    setIsCameraOn((prevState) => !prevState);
  };

  return (
    <div>
      {isCameraOn && (
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      )}
      <button onClick={capture} disabled={!isCameraOn}>
        Capture
      </button>
      <button onClick={handleCameraToggle}>
        {isCameraOn ? "Turn Off Camera" : "Turn On Camera"}
      </button>
    </div>
  );
};

export default WebcamCapture;
