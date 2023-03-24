import React from "react";
import { NavBarDropDown } from "../NavBarDropDown/NavBarDropDown";

export const NavBar = ({ dropDowns }) => {
  return (
    <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav">
        {dropDowns.map((args, i) => {
          return <NavBarDropDown key={i} {...args} />;
        })}
        <NavBarDropDown />
      </ul>
    </div>
  );
};

// Define the prop types for this component
