import React from "react";
import { Link } from "react-router-dom";
import SimpleCounter from "../../../components/SimpleCounter";

export const AAPilots = () => {
  return (
    <div className="container">
      <h1>American Airlines - Pilots</h1>
      <SimpleCounter />
      <Link to="/">Home</Link>
    </div>
  );
};
