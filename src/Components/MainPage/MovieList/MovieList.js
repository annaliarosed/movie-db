import React, { useRef, useEffect } from "react";
import Movie from "./Movie";
import "./movielist.css";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  const refField = useRef(null);

  useEffect(() => {
    if (movies.length > 0 && refField.current) {
      refField.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [movies]);

  return (
    movies.length > 0 && (
      <div className="search-results-wrapper">
        <h1 className="search-results" ref={refField}>
          Search Results
        </h1>
        <div className="movie-container">
          {movies.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id} className="link">
              <Movie
                vote={movie.vote_average}
                image={movie.poster_path}
                originalTitle={movie.original_title}
                releaseDate={movie.release_date}
                id={movie.id}
              />
            </Link>
          ))}
        </div>
      </div>
    )
  );
};

export default MovieList;
