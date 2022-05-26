import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  function decrementCounter() {
    setCounter((prevCounter) => prevCounter - 1);
  }

  return (
    <div className="counter-container">
      <h2>Counter Component</h2>
      <div className="sec-container">
        <button onClick={decrementCounter}>-</button>
        <input type="text" readOnly value={counter} />
        <button onClick={incrementCounter}>+</button>
      </div>
    </div>
  );
}

export default Counter;
