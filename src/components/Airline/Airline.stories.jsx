import { Airline } from "./Airline";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Components/Airline",
  component: Airline,
};

const Template = (args) => (
  <Router>
    <div className="container">
      <div className="row">
        <Airline {...args} />
      </div>
    </div>
  </Router>
);
export const ExampleWithNameAndPath = Template.bind({});
ExampleWithNameAndPath.args = {
  name: "American Airlines",
  path: "/american-airlines/bidtypes",
};
