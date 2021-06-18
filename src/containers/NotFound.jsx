import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.scss";
import NotFoundImage from "../images/NotFound.png";

const NotFound = () => {
  return (
    <main className="not-found__container">
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
