import { useEffect, useState } from "react";
import api from "../api";

const useInitialState = () => {
  const [countries, setCountries] = useState([]);
  const [details, setDetails] = useState([]);

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
      setDetails(data);
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
