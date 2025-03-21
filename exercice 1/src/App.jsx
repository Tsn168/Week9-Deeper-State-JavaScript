import React, { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);

  const getScoreBarStyle = () => {
    // Compute width
    const scoreWidth = `${(score / 10) * 100}%`;

    // Compute color based on score
    let scoreColor = score < 4 ? "#e74c3c" : score < 7 ? "#f3bc47" : "#2ecc71";

    // Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
      height: "20px",
      transition: "width 0.3s ease-in-out",
    };
  };

  return (
    <div className="score-panel">
      <h1>My Score in React</h1>

      <small>Enter a score (0 to 10): </small>
      <input
        type="number"
        min="0"
        max="10"
        value={score}
        onChange={(e) => setScore(Math.min(10, Math.max(0, Number(e.target.value))))}
      />

      <div className="score-bar" style={{ width: "100%", backgroundColor: "#ddd", height: "20px", marginTop: "10px" }}>
        <div className="score-bar-value" style={getScoreBarStyle()}></div>
      </div>
    </div>
  );
}
