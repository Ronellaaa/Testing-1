import React from "react";
import Lottie from "react-lottie";
import animationData from "./animation.json"; // Path to your Lottie animation file

const AnimatedCharacter = ({ message }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Lottie options={defaultOptions} height={200} width={200} />
      <h2>{message}</h2>
    </div>
  );
};

export default AnimatedCharacter;
