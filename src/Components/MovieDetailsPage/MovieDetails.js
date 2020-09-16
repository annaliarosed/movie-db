import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./moviedetailspage.css";
import MovieDetailsBanner from "./MovieDetailsBanner";

const MovieDetails = ({ movies, APIKEY }) => {
  const { movieId } = useParams();
  const [currentMovie, setCurrentMovie] = useState({});
  const num = parseFloat(movieId);
  const currentMovieId = movies.find((movie) => movie.id === num);
//I think the problem is with this currentMovieId section, component rerenders too many times as well I think
  useEffect(() => {
    setCurrentMovie(currentMovieId);
  }, []);

  return (
    <>
      <MovieDetailsBanner
        id={currentMovie.id}
        APIKEY={APIKEY}
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
