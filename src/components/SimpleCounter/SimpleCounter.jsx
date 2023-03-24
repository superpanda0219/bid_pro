import React, { useState } from "react";
export const SimpleCounter = () => {
  /**
   * Hooks
   */
  const [count, setCount] = useState(0);
  /**
   * JavaScript Code
   */
  const addNumber = () => {
    //add number to counter
    setCount(count + 1);
  };
  const subtractNumber = () => {
    //subtract number from counter
    setCount(count - 1);
  };
  /**
   * HTML Code (JSX)
   */

  return (
    <div className="row">
      <div className="col display-6">Counter: {count}</div>
      <div className="col-1">
        <button className="btn btn-primary" onClick={addNumber}>
          +
        </button>
      </div>
      <div className="col-1">
        <button className="btn btn-primary" onClick={subtractNumber}>
          -
        </button>
      </div>
    </div>
  );
};
