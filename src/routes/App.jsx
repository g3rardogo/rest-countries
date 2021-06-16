import React from "react";
import "../styles/Global.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../containers/Home";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

const App = () => {
  const initialState = useInitialState();
  const isEmpty = Object.keys(initialState.state).length;
  return (
    <>
      {isEmpty > 0 ? (
        <AppContext.Provider value={initialState}>
          <BrowserRouter>
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </Layout>
          </BrowserRouter>
        </AppContext.Provider>
      ) : (
        <h1>Cargando</h1>
      )}
    </>
  );
};

export default App;
