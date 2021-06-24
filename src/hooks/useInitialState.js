import React, { useEffect, useState } from "react";
import api from "../api";

const useInitialState = () => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [details, setDetails] = useState({
    information: [],
    languages: [],
    currencies: [],
    borderCountries: [],
  });

  useEffect(async () => {
    try {
      const data = await api.countries.list();
      setCountries(data);
      setFilteredCountries(data);
      setLoading(false);
    } catch (error) {
      console.log(`Error ${error}`);
    }
  }, []);

  const countryDetail = async (country) => {
    try {
      setLoading(true);
      const data = await api.countries.read(country);
      const languages = [];
      const currencies = [];
      const borderCountries = [];
      const borderCountriesNames = [];

      data[0].languages.map((language) => {
        languages.push(language.name);
      });

      if (data[0].borders.length > 0) {
        data[0].borders.map((border) => {
          borderCountries.push(border.toLowerCase());
        });
        for (const border in borderCountries) {
          const country = await api.countries.readAlpha(
            borderCountries[border]
          );
          borderCountriesNames.push(country.name);
        }
      } else {
        borderCountriesNames.push("Not Found");
      }

      data[0].currencies.map((currency) => {
        currencies.push(currency.name);
      });

      setDetails({
        information: data,
        languages: languages,
        currencies: currencies,
        borderCountries: borderCountriesNames,
      });
      setLoading(false);
    } catch (error) {
      console.log("Country Not Found");
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
      setLoading(true);
      const countries = await api.countries.listRegion(region);
      setLoading(false);
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
    loading,
    darkMode,
    setDarkMode,
    searchCountries,
    searchByRegion,
  };
};

export default useInitialState;
