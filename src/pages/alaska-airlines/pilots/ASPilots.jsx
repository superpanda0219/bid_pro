import React from "react";
import { Link } from "react-router-dom";
import SimpleAddition from "../../../components/SimpleAddition";

export const ASPilots = () => {
  return (
    <div className="container">
      <h1>Alaska Airlines - Pilots</h1>
      <SimpleAddition />
      <Link to="/">Home</Link>
    </div>
  );
};
