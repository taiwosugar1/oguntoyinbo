import React, { useEffect, useState } from "react";
import "./Loader.css";

const Loader = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Animate the count to go from 1 to 100
    let counter = 0;
    const interval = setInterval(() => {
      counter += 1;
      setCount(counter);
      if (counter === 100) clearInterval(interval);
    }, 20); // Adjust speed for the counting effect
  }, []);

  return (
    <div className="loader-container">
      <div className="door door-left"></div>
      <div className="door door-right"></div>
      <div className="loader-text">{count}%</div>
    </div>
  );
};

export default Loader;
