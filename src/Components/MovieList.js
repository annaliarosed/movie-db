import React from "react";
import Movie from "./Movie";

const MovieList = (props) => {
  return (
    <div>
      <div className="movie-container">
        {props.movies.map((movie, index) => {
          return (
            <Movie
              key={index}
              image={movie.poster_path}
              originalTitle={movie.original_title}
              releaseDate={movie.release_date}
            />
          )
        })}
      </div>
    </div>
  )
};

export default MovieList;
