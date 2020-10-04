import React, { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import MovieList from "./MovieList/MovieList";
import TrendList from "./TrendList/TrendList";

const MainPage = ({ APIKEY }) => {
  const myAbortController = new AbortController();
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
    setMovies(indMovies.results);
    setSearchValue("");
    return () => {
      console.log("Component unmounted");
      myAbortController.abort();
    };
  };

  return (
    <div>
      <SearchBar
        handleSubmit={handleSubmit}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <MovieList movies={movies} />
      <TrendList APIKEY={APIKEY} />
    </div>
  );
};

export default MainPage;
