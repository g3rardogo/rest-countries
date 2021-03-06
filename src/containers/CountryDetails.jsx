import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AppContext from "../context/AppContext";
import formatter from "../utils/formatter";
import NotFound from "./NotFound";
import CountryDetailsLoader from "../components/CountryDetailsLoader";
import "../styles/CountryDetails.scss";

const CountryDetailsContainer = (props) => {
  const history = useHistory();
  const countryName = props.match.params.countryName;
  const { loading, darkMode, countryDetail, details } = useContext(AppContext);
  const { information, languages, currencies, borderCountries } = details;
  console.log(loading);

  useEffect(async () => {
    await countryDetail(countryName);
  }, []);

  if (loading) {
    return <CountryDetailsLoader />;
  } else {
    if (information.length > 0) {
      return (
        <main
          className={
            darkMode
              ? "main-detail__container dark-mode--background"
              : "main-detail__container light-mode--background"
          }
        >
          {information.map((country) => (
            <div className="country__container" key={country.name}>
              <div className="back__container">
                <button
                  className={
                    darkMode ? "dark-mode--element" : "light-mode--element"
                  }
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
                        {formatter.format(country.population)}
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
                        {currencies.length > 0 ? (
                          currencies.join(", ")
                        ) : (
                          <p>Currencies Not Found</p>
                        )}
                      </p>
                      <p>
                        <strong>Languages: </strong>
                        {languages.join(", ")}
                      </p>
                    </div>
                  </div>
                  <div className="borders__container">
                    <h3>Border Countries:</h3>
                    {borderCountries == "Not Found" ? (
                      <p>Borders Not Found</p>
                    ) : (
                      borderCountries.map((border) => {
                        return (
                          <Link key={border} to={`/details/${border}`}>
                            <button
                              className={
                                darkMode
                                  ? "dark-mode--element"
                                  : "light-mode--element"
                              }
                            >
                              {border}
                            </button>
                          </Link>
                        );
                      })
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </main>
      );
    } else {
      return <NotFound />;
    }
  }
};

export default CountryDetailsContainer;
