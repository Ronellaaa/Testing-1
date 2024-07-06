import React from "react";
import Lottie from "lottie-react";
import animationData from "./teacher.json";
import "./virtual.css";

const VirtualTeacher = ({ moment, onClose }) => {
  return (
    <div className="virtual-teacher-overlay" onClick={onClose}>
      <div className="virtual-teacher">
        <h2>{moment.description}</h2>
        <img src={moment.image} alt={moment.description} />
        <Lottie animationData={animationData} className="lottie-animation" />
      </div>
    </div>
  );
};

export default VirtualTeacher;
