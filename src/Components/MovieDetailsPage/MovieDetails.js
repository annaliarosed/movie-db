import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./moviedetailspage.css";
import MovieDetailsBanner from "./MovieDetailsBanner";

const MovieDetails = ({ movies, APIKEY }) => {
  const { movieId } = useParams();
  const [currentMovie, setCurrentMovie] = useState("");
  const num = parseFloat(movieId);

  useEffect(() => {
    setCurrentMovie(movies.find((movie) => movie.id === num));
  }, [num, movies]);

  return (
    <>
      <MovieDetailsBanner
        backgroundImg={currentMovie.backdrop_path}
        poster={currentMovie.poster_path}
        title={currentMovie.original_title}
        releaseDate={currentMovie.release_date}
        overview={currentMovie.overview}
      />
    </>
  );
};

export default MovieDetails;