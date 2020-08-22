import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import MovieList from "./Components/MovieList";
import Header from "./Components/Header";

const App = () => {
  const APIKEY = "3aece1730ec57334758cdeb57c0d6adb";
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${searchValue}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setMovies(data.results)
      })
  };

  return (
    <div>
      <div>
        <Header />
        <SearchBar
          caption={"Millions of movies, TV shows and people to discover. Explore now."}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          searchValue={searchValue}
        />
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;