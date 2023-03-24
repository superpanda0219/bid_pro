import React from "react";
import { Link } from "react-router-dom";
import HelloNameSelection from "../../../components/HelloNameSelection";

export const FABidTypes = () => {
  return (
    <div>
      <h1>Frontier Airlines - BidTypes</h1>
      <HelloNameSelection />
      <Link to="/">Home</Link>
    </div>
  );
};
