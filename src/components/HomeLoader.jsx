import React from "react";
import Skeleton from "react-loading-skeleton";
import "../styles/Home.scss";
import "../styles/components/CountriesList.scss";
import "../styles/components/CountryCard.scss";
import "../styles/components/FilterSelect.scss";
import "../styles/components/SearchInput.scss";
import CountryCardLoader from "./CountryCardLoader";

const HomeLoader = () => {
  return (
    <main>
      <div className="filter-countries__container">
        <div className="search__container">
          <Skeleton className="search-input" />
        </div>
        <div className="filter__container">
          <Skeleton className="regions-select" />
        </div>
      </div>
      <div className="countries__container">
        <CountryCardLoader />
        <CountryCardLoader />
        <CountryCardLoader />
        <CountryCardLoader />
        <CountryCardLoader />
        <CountryCardLoader />
        <CountryCardLoader />
        <CountryCardLoader />
      </div>
    </main>
  );
};

export default HomeLoader;
