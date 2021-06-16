import React from "react";
import "../styles/Global.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../containers/Home";
import CountryDetails from "../containers/CountryDetails";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

const App = () => {
  const initialState = useInitialState();
  return (
    <>
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/:countryName"
                render={(props) => (
                  <CountryDetails
                    key={props.match.params.countryName}
                    {...props}
                  />
                )}
              />
            </Switch>
          </Layout>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
};

export default App;
