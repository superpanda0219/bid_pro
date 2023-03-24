import React from "react";
import { Link } from "react-router-dom";
import SimpleMathCalculator from "../../../components/SimpleMathCalculator";

export const FAPilots = () => {
  return (
    <div className="container">
      <h1>Frontier Airlines - Pilots</h1>
      <SimpleMathCalculator />
      <Link to="/">Home</Link>
      <Link className="mx-10" to="/ups/pilots">Go to check</Link>
    </div>
  );
};



