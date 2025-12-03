// src/components/WebAnimation.jsx
import React from "react";
import Lottie from "lottie-react";
import codingAnim from "../assets/Coding.json"; // <-- correct relative path

// optional props: className, loop, autoplay
export default function WebAnimation({ className = "w-64 h-64", loop = true }) {
  return (
    <div className={className}>
      <Lottie animationData={codingAnim} loop={loop} />
    </div>
  );
}
