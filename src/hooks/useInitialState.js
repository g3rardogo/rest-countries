import { useEffect, useState } from "react";
import initialState from "../../initialState";
import api from "../api";

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  useEffect(async () => {
    try {
      const data = await api.countries.list();
      setState({
        countries: data,
      });
    } catch (error) {
      console.log(`Error ${error}`);
    }
  }, []);

  return {
    state,
  };
};

export default useInitialState;
