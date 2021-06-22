import React, { useContext } from "react";
import SearchInput from "../components/SearchInput";
import FilterSelect from "../components/FilterSelect";
import CountriesList from "../components/CountriesList";
import AppContext from "../context/AppContext";
import HomeLoader from "../components/HomeLoader";
import "../styles/Home.scss";

const Home = () => {
  const { loading } = useContext(AppContext);
  if (loading) {
    return <HomeLoader />;
  } else {
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
  }
};

export default Home;
