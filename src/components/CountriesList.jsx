import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import CountryCard from "./CountryCard";
import "../styles/components/CountriesList.scss";

const CountriesList = () => {
  const { state } = useContext(AppContext);
  const { countries } = state;
  return (
    <div className="countries__container">
      {countries.map((country) => {
        return (
          <Link key={country.name} to={`/${country.name}`}>
            <CountryCard country={country} />
          </Link>
        );
      })}
    </div>
  );
};

export default CountriesList;
