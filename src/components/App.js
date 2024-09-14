import React, { useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [posi, setPosi] = useState(0);
  const ballPosition = { left: `${posi}px` };

  const buttonClickHandler = () => {
    setRenderBall(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      setPosi((prevPosi) => prevPosi + 5);
    }
  };

  useEffect(() => {
    if (renderBall) {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [renderBall]);

  return (
    <div className="playground">
      {renderBall ? (
        <div className="ball" style={ballPosition}></div>
      ) : (
        <button className="start" onClick={buttonClickHandler}>
          Start
        </button>
      )}
    </div>
  );
};

export default App;
