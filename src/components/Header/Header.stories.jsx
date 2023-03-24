import React from "react";
import { Header } from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Components/Header",
  component: Header,
};

const Template = () => (
  <Router>
    <Header />
  </Router>
);
export const Default = Template.bind({});
