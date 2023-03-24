import React from "react";
import { Link } from "react-router-dom";

export const NavBarDropDown = ({ airlineName, bidTypePath, pilotsPath }) => {
  return (
    <li className="nav-item dropdown d-inline-block">
      <a
        className="nav-link dropdown toggle text-light"
        href="/"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {airlineName}
      </a>
      <ul
        className="dropdown-menu dropdown-menu-end"
        aria-labelledby="navbarDropDown"
      >
        <li>
          <Link className="dropdown-item" to={bidTypePath}>
            BidTypes
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link className="dropdown-item" to={pilotsPath}>
            Pilots
          </Link>
        </li>
      </ul>
    </li>
  );
};

// Add in prop types
