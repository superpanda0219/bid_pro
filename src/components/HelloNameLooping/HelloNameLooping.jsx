import React, { useState } from "react";

export const HelloNameLooping = () => {
  /**
   * Hooks
   */
  const [name, setName] = useState("");
  const [numOfTimesInput, setNumOfTimesInput] = useState("");
  const [helloNameMessages, setHelloNameMessages] = useState([]);

  /**
   * JavaScript Code
   */
  const displayHelloMessage = () => {
    let numOfTimes = Number(numOfTimesInput);

    let messages = [];
    for (let ctr = 0; ctr < numOfTimes; ctr++) {
      let message = `Hello ${name}`;
      if ((ctr + 1) % 2 === 0) {
        message += "!";
      }
      messages.push(message);
    }
    setHelloNameMessages(messages);
  };

  const clearName = () => {
    setName("");
    setNumOfTimesInput("");
    setHelloNameMessages([]);
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
          id="numOfTimesInput"
          placeholder="Enter number of times"
          value={numOfTimesInput}
          onChange={(e) => setNumOfTimesInput(e.target.value)}
        />
      </div>
      <ol>
        {helloNameMessages.map((message, ctr) => {
          return <li key={ctr}>{message}</li>;
        })}
      </ol>
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
