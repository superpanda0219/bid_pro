import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * Interactive component that displays the airline section
 */

export function Airline({ name, path }) {
  return (
    <div className="col-xs-12 col-sm-6 mt-3">
      <h1>{name}</h1>
      <p className="lead">
        View the monthly bid data, import history &amp; download statistics.
      </p>
      <Link to={path} className="btn btn-outline-dark">
        View
      </Link>
    </div>
  );
}

Airline.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
};
