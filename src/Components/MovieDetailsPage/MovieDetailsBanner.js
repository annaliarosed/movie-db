import React from "react";
import moment from "moment";
import { useState, useEffect } from "react";

const MovieDetailsBanner = ({
  id,
  APIKEY,
  backgroundImg,
  poster,
  title,
  releaseDate,
  overview
}) => {
  const [movieDetails, setMovieDetails] = useState({
    genres: {}
  });
  const yearReleaseDate = moment(releaseDate).format(`YYYY`);
  const formattedReleaseDate = moment(releaseDate).format(`MM/DD/YYYY`);
  const styles = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w780${backgroundImg})`
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}`
      );
      const jsonData = await data.json();
      setMovieDetails(jsonData);
    };
    fetchMovieDetails();
  }, [id]);
  //This api only seems to fetch data after reloading the page or making a change to the code 

  //dont know how to access genres array, returning undefined

  return (
    <div className="banner-container" style={styles}>
      <div className="banner">
        <img
          id="movie-details-poster"
          src={`https://image.tmdb.org/t/p/w342${poster}`}
          alt="movie poster"
        />
        <div className="banner-text">
          <h1 id="title">
            {title} <span>({yearReleaseDate})</span>
          </h1>
          <div className="under-title-data">
            <span id="rating">R</span>
            <li>
              <span>{formattedReleaseDate}</span>
            </li>
            <li>
              <span>genres</span>
            </li>
            <li>
              <span>{movieDetails.runtime} minutes</span>
            </li>
          </div>
          <h1>Overview</h1>
          <p>genres</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsBanner;