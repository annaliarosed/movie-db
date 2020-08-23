import React from "react";
import Movie from "./Movie";
import "./movielist.css";

const MovieList = (props) => {
  return (
    <>
      <div className="movie-container">
        {props.movies.map((movie, index) => {
          return (
            <Movie
              key={index}
              image={movie.poster_path}
              originalTitle={movie.original_title}
              releaseDate={movie.release_date}
            />
          );
        })}
      </div>
    </>
  );
};

export default MovieList;
