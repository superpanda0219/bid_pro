import { useSelect } from "@mui/base";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMath } from "../../features/mathSlice";

export const SimpleMathCalculator = () => {
  /**
   * Hooks
   */
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [total, setTotal] = useState("?");
  const [isNumber, setIsNumber] = useState(true);
  const [wording, setWording] = useState("");
  const dispatch = useDispatch();
  /**
   * JavaScript Code
   */
  
  const calculate = () => {
    setIsNumber(isNaN(Number(num1)) || isNaN(Number(num2)));
    if (!isNumber) {
      alert('you must input number');
      return 0;
    }
    let num1Var = Number(num1);
    let num2Var = Number(num2);
    let functionVar = operator;
    let answer;
    if (functionVar === "+") answer = num1Var + num2Var;
    if (functionVar === "-") answer = (num1Var - num2Var);
    if (functionVar === "*") answer = (num1Var * num2Var);
    if (functionVar === "/") answer = (num1Var / num2Var);
    if (functionVar === "%") answer = (num1Var % num2Var);
    dispatch(addMath({numberOne: num1, operator, numberTwo: num2, answer}));
    setTotal(answer);
    setWording(`The answer to ${num1} ${operator} ${num2} is `);
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
    <div className="mt-4">
      <div className="container mx-auto px-9 pb-3 flex gap-5 items-center">
        <div className="w-1/6">
          <input 
            type="text" 
            className="border p-2"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />  
        </div>
        <select className="w-1/6 px-2 py-2" value={operator} onChange={(e) => setOperator(e.target.value)}>
            <option value="+">Addition (+)</option>
            <option value="-">Subtraction (-)</option>
            <option value="*">Multiplication (*)</option>
            <option value="/">Division (/)</option>
            <option value="%">Remainder (%)</option>
        </select>
        <div className="w-1/6">
          <input 
            type="text" 
            className="border p-2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />  
        </div>
        <div className="w-1/2 flex">
          <div className="w-2/4 flex justify-center gap-28">
            <div className="display-6">=</div>
            <div className="display-6">{total}</div>
          </div>
          <div className="w-2/4 flex justify-between">
            <button className="btn w-1/2 btn-primary" onClick={calculate}>
              Calculate
            </button>
            <button className="btn w-1/3 btn-danger" onClick={clear}>
              Clear
            </button>
          </div>
        </div>
      </div>
      {total !=='?'&& !isNumber&&
        <div className="bg-gray-500 p-2">
            <h1>{`${wording} ${total}.`}</h1>
        </div>
      }
    </div>
  );
};
