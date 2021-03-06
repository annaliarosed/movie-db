import React, { useState, useContext } from "react";
import SearchBar from "./SearchBar/SearchBar";
import MovieList from "./MovieList/MovieList";
import TrendList from "./TrendList/TrendList";
import { ThemeContext } from "../../App";

const MainPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const APIKEY = useContext(ThemeContext);

  const handleSubmit = async (e) => {
    if (!searchValue) {
      return;
    }

    e.preventDefault();
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${searchValue}`
    );
    const indMovies = await data.json();
    setMovies(indMovies.results);
    setSearchValue("");
  };

  return (
    <div>
      <SearchBar
        onSubmit={handleSubmit}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <MovieList movies={movies} />
      <TrendList />
    </div>
  );
};

export default MainPage;
