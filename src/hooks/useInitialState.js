import React, { useEffect, useState } from "react";
import api from "../api";

const useInitialState = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [details, setDetails] = useState({
    information: [],
    languages: [],
    borderCountries: [],
  });

  useEffect(async () => {
    try {
      const data = await api.countries.list();
      setCountries(data);
      setFilteredCountries(data);
    } catch (error) {
      console.log(`Error ${error}`);
    }
  }, []);

  const countryDetail = async (country) => {
    try {
      const data = await api.countries.read(country);
      const languages = [];
      const borderCountries = [];
      const borderCountriesNames = [];

      data[0].languages.map((language) => {
        languages.push(language.name);
      });

      data[0].borders.map((border) => {
        borderCountries.push(border.toLowerCase());
      });

      for (const border in borderCountries) {
        const country = await api.countries.readAlpha(borderCountries[border]);
        borderCountriesNames.push(country.name);
      }

      setDetails({
        information: data,
        languages: languages,
        borderCountries: borderCountriesNames,
      });
    } catch (error) {
      console.log(`Error ${error}`);
    }
  };

  const searchCountries = (countries) => {
    const [query, setQuery] = React.useState("");
    React.useMemo(() => {
      const result = countries.filter((country) => {
        return `${country.name}`.toLowerCase().includes(query.toLowerCase());
      });
      setFilteredCountries(result);
    }, [query]);
    return { query, setQuery };
  };

  const searchByRegion = async (region) => {
    try {
      const countries = await api.countries.listRegion(region);
      setFilteredCountries(countries);
    } catch (error) {
      console.log(`Error ${error}`);
    }
  };

  return {
    countries,
    filteredCountries,
    details,
    countryDetail,
    searchCountries,
    searchByRegion,
  };
};

export default useInitialState;
