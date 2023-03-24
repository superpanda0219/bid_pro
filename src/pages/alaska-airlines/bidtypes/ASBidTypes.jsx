import React from "react";
import { Link } from "react-router-dom";
import HelloNameSavingData from "../../../components/HelloNameSavingData";
import BidType from "../../../components/BidType";

export const ASBidTypes = () => {
  return (
    <div className="container">
      <h1>Alaska Airlines - BidTypes</h1>
      <HelloNameSavingData />
      <Link to="/">Home</Link>
    </div>
  );
};
