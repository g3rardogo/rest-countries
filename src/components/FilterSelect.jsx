import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/components/FilterSelect.scss";

const FilterSelect = () => {
  const { darkMode, searchByRegion } = useContext(AppContext);
  return (
    <>
      <select
        className={
          darkMode
            ? "regions-select dark-mode--element"
            : "regions-select light-mode--element"
        }
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
