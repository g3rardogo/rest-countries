import React, { useContext } from "react";
import "../styles/components/FilterSelect.scss";
import useInitialState from "../hooks/useInitialState";
import AppContext from "../context/AppContext";

const FilterSelect = () => {
  const { searchByRegion } = useContext(AppContext);
  return (
    <>
      <select
        className="regions-select"
        defaultValue={"DEFAULT"}
        onChange={(e) => searchByRegion(e.target.value)}
      >
        <option value="DEFAULT" disabled hidden>
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
      <div className="select__arrow"></div>
    </>
  );
};

export default FilterSelect;
