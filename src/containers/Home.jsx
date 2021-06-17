import React from "react";
import SearchInput from "../components/SearchInput";
import FilterSelect from "../components/FilterSelect";
import CountriesList from "../components/CountriesList";
import "../styles/Home.scss";

const App = () => {
  return (
    <>
      <SearchInput />
      <FilterSelect />
      <CountriesList />
    </>
  );
};

export default App;
