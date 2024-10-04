import React, { useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [posi, setPosi] = useState(5);

  const buttonClickHandler = () => {
    setRenderBall(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      setPosi(posi + 5);
    }
  };

  useEffect(() => {
    if (renderBall) {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [renderBall, posi]);

  return (
    <div className="playground">
      {renderBall ? (
        <div
          className="ball"
          style={{ position: "absolute", left: `${posi}px` }}
        ></div>
      ) : (
        <button className="start" onClick={buttonClickHandler}>
          Start
        </button>
      )}
    </div>
  );
};

export default App;
