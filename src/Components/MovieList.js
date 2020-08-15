import React from "react";
import Movie from "./Movie";

const MovieList = (props) => {
  return (
    <div>
      <div>
        {props.movies.map((movie, index) => {
          return <Movie key={index} image={movie.poster_path} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;