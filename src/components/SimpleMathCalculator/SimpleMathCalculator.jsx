import React, { useState } from "react";
import styles from "./SimpleMathCalculator.module.css";

export const SimpleMathCalculator = () => {
  /**
   * Hooks
   */
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [total, setTotal] = useState("?");
  const [isNumber, setIsNumber] = useState(true);
  const [wording, setWording] = useState("");
  /**
   * JavaScript Code
   */
  const calculate = () => {
    setIsNumber(isNaN(Number(num1)));
    setIsNumber(isNaN(Number(num2)));
    let num1Var = Number(num1);
    let num2Var = Number(num2);
    let functionVar = operator;

    if (functionVar === "+") setTotal(num1Var + num2Var);
    if (functionVar === "-") setTotal(num1Var - num2Var);
    if (functionVar === "*") setTotal(num1Var * num2Var);
    if (functionVar === "/") setTotal(num1Var / num2Var);
    if (functionVar === "%") setTotal(num1Var % num2Var);
    setWording(`The answer to ${num1} ${operator} ${num2}`);
  };

  const clear = () => {
    setNum1("");
    setNum2("");
    setTotal("?");
    setWording("");
  };
  /**
   * HTML Code (JSX)
   */

  return (
    <div className="row">
      <div className="col-2">
        <input
          type="text"
          className={
            "form-control" + isNumber ? styles.isNotANumber : styles.isANumber
          }
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </div>
      <div className="col-3">
        <select value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option>Selct your operator</option>
          <option value="+">Addition (+)</option>
          <option value="-">Subtraction (-)</option>
          <option value="*">Multiplication (*)</option>
          <option value="/">Division (/)</option>
          <option value="%">Remainder (%)</option>
        </select>
      </div>
      <div className="col-2">
        <input
          type="text"
          className={
            "form-control" + isNumber ? styles.isNotANumber : styles.isANumber
          }
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div className="col-1 display-6">=</div>
      <div className="col-1 display-6">{total}</div>
      <div className="col-1 d-grid">
        <button className="btn btn-primary" onClick={calculate}>
          Calculate
        </button>
      </div>
      <div className="col-1 d-grid">
        <button className="btn btn-danger" onClick={clear}>
          Clear
        </button>
      </div>
      <div style={{ backgroundColor: "grey" }}>
        <h1 value="bottomTotal" style={{ display: "flex" }}>
          {total}
        </h1>
        <h3 value="bottomWording">{wording}</h3>
      </div>
    </div>
  );
};
