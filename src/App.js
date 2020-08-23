import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar.js";
import MovieList from "./Components/MovieList/MovieList.js";
import Header from "./Components/Header/Header.js";

const App = () => {
  const APIKEY = "3aece1730ec57334758cdeb57c0d6adb";
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    if (!searchValue) {
      return;
    }

    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${searchValue}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <>
      <Header title="MOVIE DATABASE" />
      <SearchBar
        caption="Millions of movies, TV shows and people to discover. Explore now."
        handleSubmit={handleSubmit}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <MovieList movies={movies} />
    </>
  );
};

export default App;