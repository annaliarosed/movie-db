import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import MovieList from "./MovieList/MovieList";
import TrendList from "./TrendList/TrendList";

const MainPage = ({
  handleSubmit,
  searchValue,
  setSearchValue,
  movies,
  APIKEY
}) => {
  return (
    <div>
      <SearchBar
        caption="Millions of movies, TV shows and people to discover. Explore now."
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