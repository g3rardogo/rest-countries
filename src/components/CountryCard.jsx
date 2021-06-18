import React from "react";
import formatter from "../utils/formatter";
import "../styles/components/CountryCard.scss";

const CountryCard = ({ country }) => {
  return (
    <div className="card__container">
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
