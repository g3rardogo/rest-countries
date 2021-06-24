import React, { useContext } from "react";
import formatter from "../utils/formatter";
import "../styles/components/CountryCard.scss";
import AppContext from "../context/AppContext";

const CountryCard = ({ country }) => {
  const { darkMode } = useContext(AppContext);
  return (
    <div
      className={
        darkMode
          ? "card__container dark-mode--element"
          : "card__container light-mode--element"
      }
    >
      <div className="flag__container">
        <img src={country.flag} alt={`${country.name} Flag`} />
      </div>
      <div className="info__container">
        <h3>{country.name}</h3>
        <p>
          <strong>Population: </strong>
          {formatter.format(country.population)}
        </p>
        <p>
          <strong>Region: </strong>
          {country.region}
        </p>
        <p>
          <strong>Capital: </strong>
          {country.capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
