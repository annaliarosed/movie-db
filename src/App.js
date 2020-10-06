import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import MovieDetails from "./Components/MovieDetailsPage/MovieDetails";
import MainPage from "./Components/MainPage/MainPage";
import Header from "./Components/MainPage/Header/Header";

export const ThemeContext = React.createContext();

const App = () => {
  const APIKEY = "3aece1730ec57334758cdeb57c0d6adb";
  return (
    <>
      <ThemeContext.Provider value={APIKEY}>
        <Header title="movie database" />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/movie/:movieId">
            <MovieDetails />
          </Route>
        </Switch>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
