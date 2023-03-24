import React, { useState } from "react";

export const HelloNameInputOutput = () => {
  // JavaScript goes here

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [helloNameMessage, setHelloNameMessage] = useState("First Last");
  const displayHelloMessage = () => {
    setHelloNameMessage(`Hello ${firstName} ${lastName}`);
  };
  const clearName = () => {
    setFirstName("");
    setLastName("");
    setHelloNameMessage("");
  };

  // JSX Code (HTML) goes here

  return (
    <>
      <div>
        <label htmlFor="firstNameInput">First Name:</label>
        <input
          type="text"
          id="firstNameInput"
          placeholder="Enter a first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastNameInput">First Name:</label>
        <input
          type="text"
          id="lastNameInput"
          placeholder="Enter a last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button onClick={displayHelloMessage}>Display</button>
        <button onClick={clearName}>Clear</button>
      </div>
      <p>{helloNameMessage}</p>
    </>
  );
};
