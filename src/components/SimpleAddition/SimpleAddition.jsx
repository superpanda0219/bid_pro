import React, { useState } from "react";

export const SimpleAddition = () => {
  /**
   * Hooks
   */
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [total, setTotal] = useState("?");
  /**
   * JavaScript Code
   */
  const calculate = () => {
    let num1Var = Number(num1);
    let num2Var = Number(num2);
    setTotal(num1Var + num2Var);
  };

  const clear = () => {
    setNum1("");
    setNum2("");
    setTotal("?");
  };
  /**
   * HTML Code (JSX)
   */

  return (
    <div className="row">
      <div className="col-2">
        <input
          type="text"
          className="form-control"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </div>
      <div className="col-1 display-6">+</div>
      <div className="col-2 display-6">
        <input
          type="text"
          className="form-control"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div className="col-1 display-6">=</div>
      <div className="col-1 display-6">{total}</div>
      <div className="col-2 d-grid">
        <button className="btn btn-primary" onClick={calculate}>
          Calculate
        </button>
      </div>
      <div className="col-2 d-grid">
        <button className="btn btn-danger" onClick={clear}>
          Clear
        </button>
      </div>
    </div>
  );
};
