import React from "react";
import { Link } from "react-router-dom";
import HelloNameLooping from "../../../components/HelloNameLooping";

export const UPBidTypes = () => {
  return (
    <div>
      <h1>UPS - BidTypes</h1>
      <HelloNameLooping />
      <Link to="/">Home</Link>
    </div>
  );
};
