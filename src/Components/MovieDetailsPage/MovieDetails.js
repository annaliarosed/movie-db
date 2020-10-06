import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../App";
import MovieDetailsBanner from "./MovieDetailsBanner/MovieDetailsBanner.js";
import MovieCast from "./MovieCast/MovieCast";

const MovieDetails = () => {
  const { movieId } = useParams();
  const APIKEY = useContext(ThemeContext);

  return (
    <>
      <MovieDetailsBanner id={movieId} APIKEY={APIKEY} />
      <MovieCast id={movieId} APIKEY={APIKEY} />
    </>
  );
};

export default MovieDetails;
