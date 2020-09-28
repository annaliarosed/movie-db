import React from "react";
import { useParams } from "react-router-dom";
import "./moviedetailspage.css";
import MovieDetailsBanner from "./MovieDetailsBanner";
import MovieCast from "./MovieCast";
//import Header from "./MainPage/Header/Header.js";

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