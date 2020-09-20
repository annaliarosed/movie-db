import React, { useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar.js";
import MovieList from "./Components/MovieList/MovieList.js";
import Header from "./Components/Header/Header.js";
import TrendList from "./Components/TrendList/TrendList";
import { Switch, Route } from "react-router-dom";
import MovieDetails from "./Components/MovieDetailsPage/MovieDetails";

const App = () => {
  const myAbortController = new AbortController();
  const APIKEY = "3aece1730ec57334758cdeb57c0d6adb";
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = async (e) => {
    if (!searchValue) {
      return;
    }

    e.preventDefault();
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${searchValue}`,
      { signal: myAbortController.signal }
    );
    const indMovies = await data.json();
    console.log(indMovies.results);
    setMovies(indMovies.results);
    setSearchValue("");
    return () => {
      console.log("Component unmounted");
      myAbortController.abort();
    };
  };

  return (
    <>
      <Header title="MOVIE DATABASE" />
      <Switch>
        <Route exact path="/">
          <SearchBar
            caption="Millions of movies, TV shows and people to discover. Explore now."
            handleSubmit={handleSubmit}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <MovieList movies={movies} />
          <TrendList api={APIKEY} />
        </Route>
        <Route path="/movie/:movieId">
          <MovieDetails movies={movies} APIKEY={APIKEY} />
        </Route>
      </Switch>
    </>
  );
};

export default App;
