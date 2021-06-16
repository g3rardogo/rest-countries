import { useEffect, useState } from "react";
import api from "../api";

const useInitialState = () => {
  const [countries, setCountries] = useState([]);
  const [details, setDetails] = useState({
    information: [],
    languages: [],
    borderCountries: [],
  });

  useEffect(async () => {
    try {
      const data = await api.countries.list();
      setCountries(data);
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

  return {
    countries,
    details,
    countryDetail,
  };
};

export default useInitialState;
