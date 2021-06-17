import React from "react";
import CountriesList from "../components/CountriesList";
import SearchInput from "../components/SearchInput";
import "../styles/Home.scss";

const App = () => {
  return (
    <>
      <SearchInput />
      <CountriesList />
    </>
  );
};

export default App;
