import React from "react";
import { Link } from "react-router-dom";
import HelloNameInputOutput from "../../../components/HelloNameInputOutput";

export const AABidTypes = () => {
  return (
    <div>
      <h1>American Airlines - BidTypes</h1>
      <HelloNameInputOutput />
      <Link to="/">Home</Link>
    </div>
  );
};
