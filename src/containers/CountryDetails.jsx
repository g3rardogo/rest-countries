import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AppContext from "../context/AppContext";
import "../styles/CountryDetails.scss";

const CountryDetailsContainer = (props) => {
  const history = useHistory();
  const { countryDetail, details } = useContext(AppContext);
  const countryName = props.match.params.countryName;
  const { information, languages, borderCountries } = details;

  useEffect(async () => {
    await countryDetail(countryName);
  }, []);

  return (
    <>
      {information.map((country) => (
        <div className="country__container" key={country.name}>
          <div className="back__container">
            <button
              onClick={() => {
                history.goBack();
              }}
            >
              <i className="fas fa-arrow-left"></i>
              Back
            </button>
          </div>
          <div className="info__container">
            <div className="flag__container">
              <img src={country.flag} alt={country.name} />
            </div>
            <div className="details__container">
              <div className="wrapper">
                <div className="description__container">
                  <h1>{country.name}</h1>
                  <p>
                    <strong>Native Name: </strong>
                    {country.nativeName}
                  </p>
                  <p>
                    <strong>Population: </strong>
                    {country.population}
                  </p>
                  <p>
                    <strong>Region: </strong>
                    {country.region}
                  </p>
                  <p>
                    <strong>Sub Region: </strong>
                    {country.subregion}
                  </p>
                  <p>
                    <strong>Capital: </strong>
                    {country.capital}
                  </p>
                </div>
                <div className="description__container">
                  <p>
                    <strong>Top Level Domain: </strong>
                    {country.topLevelDomain}
                  </p>
                  <p>
                    <strong>Currencies: </strong>
                    {country.name}
                  </p>
                  <p>
                    <strong>Languages: </strong>
                    {languages.join(", ")}
                  </p>
                </div>
              </div>
              <div className="borders__container">
                <h3>Border Countries:</h3>
                {borderCountries.map((border) => {
                  return (
                    <Link key={border} to={`/${border}`}>
                      <button>{border}</button>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CountryDetailsContainer;
