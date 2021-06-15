import React, { useContext } from "react";
import "../styles/Home.scss";
import AppContext from "../context/AppContext";

const App = () => {
  const { state } = useContext(AppContext);
  const { countries } = state;
  console.log(countries);
  return (
    <div>
      {countries.map((countrie) => (
        <h1>{countrie.name}</h1>
      ))}
    </div>
  );
};

export default App;
