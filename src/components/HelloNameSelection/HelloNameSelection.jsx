import React, { useState } from "react";
import styles from "./HelloNameSelection.module.css";

export const HelloNameSelection = () => {
  /**
   * Hooks
   */
  const [name, setName] = useState("");
  const [numOfTimes, setNumOfTimes] = useState("");
  const [helloNameMessage, setHelloNameMessage] = useState("");
  const [isEven, setIsEven] = useState(true);
  /**
   * JavaScript Code
   */
  const displayHelloMessage = () => {
    setIsEven(numOfTimes % 2 == 0);
    setHelloNameMessage(
      `You will display "Hello ${name}" a total of ${numOfTimes} times.`
    );
  };

  const clearName = () => {
    setName("");
    setNumOfTimes(0);
    setHelloNameMessage("");
  };

  /**
   * HTML Code (JSX)
   */

  return (
    <>
      <div className="mb-3">
        <label htmlFor="helloNameInput" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="helloNameInput"
          placeholder="Enter a name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="numOfTimesInput" className="form-label">
          Number of Times:
        </label>
        <input
          type="number"
          className="form-control"
          id="ageInput"
          placeholder="Enter your age"
          value={numOfTimes}
          onChange={(e) => setNumOfTimes(e.target.value)}
        />
      </div>
      <h2 className={isEven ? styles.evenColor : styles.oddColor}>
        {helloNameMessage}
      </h2>
      <div>
        <button className="btn btn-primary" onClick={displayHelloMessage}>
          Display Hello!
        </button>{" "}
        <button className="btn btn-danger" onClick={clearName}>
          Clear
        </button>
      </div>
    </>
  );
};
