import React from "react";
import { NavBar } from "./NavBar";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Components/NavBar",
  component: NavBar,
};

const Template = (args) => (
  <Router>
    <nav className="navbar navbar-expand-lg navbar-dark bg-light py-0">
      <div className="container-fluid ps-0">
        <NavBar {...args} />
      </div>
    </nav>
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  dropDowns: [
    {
      airlineName: "American Airlines",
      bidTypesPath: "american-airlines/bidtypes",
      plotspath: "/american-airlines/pilots",
    },
    {
      airlineName: "Alaska Airlines",
      bidTypesPath: "alaska-airlines/bidtypes",
      plotspath: "/alaska-airlines/pilots",
    },
  ],
};
