import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../actions/counter";
import "./Counter.css";

function Counter() {
  const dispatch = useDispatch();
  
  // const [counter, setCounter] = useState(0);
  const counter = useSelector((state)=> state.counter);

  function incrementCounter() {
    // setCounter((prevCounter) => prevCounter + 1);
    dispatch(increment());
  }

  function decrementCounter() {
    // setCounter((prevCounter) => prevCounter - 1);
    dispatch(decrement());
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
