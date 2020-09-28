import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import MovieDetails from "./Components/MovieDetailsPage/MovieDetails";
import MainPage from "./Components/MainPage/MainPage";
import Header from "./Components/MainPage/Header/Header";

const App = () => {
  const APIKEY = "3aece1730ec57334758cdeb57c0d6adb";
  return (
    <>
      <Header title="MOVIE DATABASE" />
      <Switch>
        <Route exact path="/">
          <MainPage APIKEY={APIKEY} />
        </Route>
        <Route path="/movie/:movieId">
          <MovieDetails APIKEY={APIKEY} />
        </Route>
      </Switch>
    </>
  );
};

export default App;
