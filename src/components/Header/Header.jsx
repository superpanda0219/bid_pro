import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { NavBar } from "../NavBar/NavBar";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light py-0">
      <div className="container-fluid ps-0">
        <Link to="/">
          <Logo />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collaps"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavBar
          dropDowns={[
            {
              airlineName: "American Airlines",
              bidTypesPath: "/american-airlines/bidtypes",
              plotspath: "/american-airlines/pilots",
            },
            {
              airlineName: "Alaska Airlines",
              bidTypesPath: "/alaska-airlines/bidtypes",
              plotspath: "/alaska-airlines/pilots",
            },
            {
              airlineName: "Frontier Airlines",
              bidTypesPath: "/frontier-airlines/bidtypes",
              plotspath: "/frontier-airlines/pilots",
            },
            {
              airlineName: "UPS",
              bidTypesPath: "/ups/bidtypes",
              plotspath: "/ups/pilots",
            },
          ]}
        />
      </div>
    </nav>
  );
};
