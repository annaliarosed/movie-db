import React from "react";
import { useParams } from "react-router-dom";

import MovieDetailsBanner from "./MovieDetailsBanner/MovieDetailsBanner.js";
import MovieCast from "./MovieCast/MovieCast";

const MovieDetails = ({ APIKEY }) => {
  const { movieId } = useParams();

  return (
    <>
      <MovieDetailsBanner id={movieId} APIKEY={APIKEY} />
      <MovieCast id={movieId} APIKEY={APIKEY} />
    </>
  );
};

export default MovieDetails;
