import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="nav__title">
        <Link to="/">
          <p>Where in the world?</p>
        </Link>
      </div>
      <div className="nav__mode">
        <i className="fas fa-moon"></i>
        <p>Dark Mode</p>
      </div>
    </nav>
  );
};

export default Navbar;
