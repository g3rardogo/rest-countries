import React from "react";
import SearchInput from "../components/SearchInput";
import FilterSelect from "../components/FilterSelect";
import CountriesList from "../components/CountriesList";
import "../styles/Home.scss";

const App = () => {
  return (
    <main>
      <div className="filter-countries__container">
        <div className="search__container">
          <SearchInput />
        </div>
        <div className="filter__container">
          <FilterSelect />
        </div>
      </div>
      <CountriesList />
    </main>
  );
};

export default App;
