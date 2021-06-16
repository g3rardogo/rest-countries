import React from "react";
import "../styles/components/Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="nav__title">
        <a href="/">
          <p>Where in the world?</p>
        </a>
      </div>
      <div className="nav__mode">
        <i class="fas fa-moon"></i>
        <p>Dark Mode</p>
      </div>
    </nav>
  );
};

export default Navbar;
