import React from "react";
import Movie from "./Movie";
import "./movielist.css";

const MovieList = (props) => {
  return (
    <>
      {props.movies.length > 0 && <h1>Search Results</h1>}
      <div className="movie-container">
        {props.movies.map((movie, index) => {
          return (
            <Movie
              key={index}
              image={movie.poster_path}
              originalTitle={movie.original_title}
              releaseDate={movie.release_date}
              id={movie.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default MovieList;