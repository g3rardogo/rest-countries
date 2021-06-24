import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.scss";
import NotFoundImage from "../images/NotFound.png";
import AppContext from "../context/AppContext";

const NotFound = () => {
  const { darkMode } = useContext(AppContext);
  return (
    <main
      className={
        darkMode
          ? "not-found__container dark-mode--background"
          : "not-found__container light-mode--background"
      }
    >
      <img src={NotFoundImage} alt="Not Found Error" />
      <h1>Oops, you've lost in earth.</h1>
      <h3>We can't find the page that you're looking for...</h3>
      <Link to="/">
        <button>GO HOME</button>
      </Link>
    </main>
  );
};

export default NotFound;
