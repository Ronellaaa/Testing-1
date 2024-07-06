import React, { useRef, useEffect } from "react";
import * as faceapi from "face-api.js";

const WebcamCapture = ({ onCapture }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadModels = async () => {
      await faceapi.loadTinyFaceDetectorModel("/models");
      await faceapi.loadFaceExpressionModel("/models");
      startVideo();
    };

    const startVideo = () => {
      navigator.getUserMedia(
        { video: {} },
        (stream) => (videoRef.current.srcObject = stream),
        (err) => console.error(err)
      );
    };

    loadModels();
  }, []);

  const handlePlay = () => {
    setInterval(async () => {
      if (videoRef.current && canvasRef.current) {
        const detections = await faceapi
          .detectAllFaces(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions()
          )
          .withFaceExpressions();
        canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
          videoRef.current
        );
        faceapi.matchDimensions(canvasRef.current, { width: 720, height: 560 });
        const resizedDetections = faceapi.resizeResults(detections, {
          width: 720,
          height: 560,
        });
        faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections);
        if (detections.length > 0) {
          onCapture(detections[0].expressions);
        }
      }
    }, 1000);
  };

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        muted
        onPlay={handlePlay}
        style={{ width: "720px", height: "560px" }}
      />
      <canvas ref={canvasRef} style={{ position: "absolute" }} />
    </div>
  );
};

export default WebcamCapture;
