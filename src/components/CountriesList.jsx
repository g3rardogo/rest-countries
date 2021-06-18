import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import CountryCard from "./CountryCard";
import "../styles/components/CountriesList.scss";

const CountriesList = () => {
  const { filteredCountries } = useContext(AppContext);
  return (
    <div className="countries__container">
      {filteredCountries.map((country) => {
        return (
          <Link key={country.name} to={`/details/${country.name}`}>
            <CountryCard country={country} />
          </Link>
        );
      })}
    </div>
  );
};

export default CountriesList;
