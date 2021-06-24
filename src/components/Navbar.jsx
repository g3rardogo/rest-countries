import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import "../styles/components/Navbar.scss";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);
  console.log(darkMode);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={darkMode ? "dark-mode--element" : "light-mode--element"}>
      <div className="nav__title">
        <Link to="/">
          <p
            className={darkMode ? "dark-mode--element" : "light-mode--element"}
          >
            Where in the world?
          </p>
        </Link>
      </div>
      <div className="nav__mode">
        <i className="fas fa-moon"></i>
        <p onClick={() => handleDarkMode()}>Dark Mode</p>
      </div>
    </nav>
  );
};

export default Navbar;
