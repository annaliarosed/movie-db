import React from "react";
import { useParams } from "react-router-dom";
import "./moviedetailspage.css";
import MovieDetailsBanner from "./MovieDetailsBanner";

const MovieDetails = ({ APIKEY }) => {
  const { movieId } = useParams();

  return (
    <>
      <MovieDetailsBanner id={movieId} APIKEY={APIKEY} />
    </>
  );
};

export default MovieDetails;