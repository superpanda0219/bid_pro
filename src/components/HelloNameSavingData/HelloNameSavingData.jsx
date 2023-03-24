import React, { useState } from "react";

export const HelloNameSavingData = () => {
  /**
   * Hooks
   */
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [helloNameMessage, setHelloNameMessage] = useState("");
  /**
   * JavaScript Code
   */
  const displayHelloMessage = () => {
    setHelloNameMessage(
      `Hello ${name}. Your age is ${age}. The year you were born is ${
        2023 - age
      }`
    );
  };

  const clearName = () => {
    setName("");
    setAge(0);
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
        <label htmlFor="ageInput" className="form-label">
          Age:
        </label>
        <input
          type="number"
          className="form-control"
          id="ageInput"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <h2>{helloNameMessage}</h2>
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
