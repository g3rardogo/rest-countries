import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/components/SearchInput.scss";

const SearchInput = () => {
  const { darkMode, countries, searchCountries } = useContext(AppContext);
  const { query, setQuery } = searchCountries(countries);
  return (
    <>
      <input
        type="text"
        id="search-countries"
        className={
          darkMode
            ? "search-input dark-mode--element"
            : "search-input light-mode--element"
        }
        placeholder={"Search for a country..."}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
};

export default SearchInput;
