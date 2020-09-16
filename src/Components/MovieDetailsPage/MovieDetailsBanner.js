import React from "react";
import moment from "moment";
import { useState, useEffect } from "react";

const MovieDetailsBanner = ({ id, APIKEY }) => {
  const [movieDetails, setMovieDetails] = useState({});
  const yearReleaseDate = moment(movieDetails.release_date).format(`YYYY`);
  const formattedReleaseDate = moment(movieDetails.release_date).format(
    `MM/DD/YYYY`
  );
  const styles = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w780${movieDetails.backdrop_path})`
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
  console.log(movieDetails.id);
  //for example, this returns undefined first then shows the ID
  
  //dont know how to access genres array, returning undefined

  return (
    <div className="banner-container" style={styles}>
      <div className="banner">
        <img
          id="movie-details-poster"
          src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`}
          alt="movie poster"
        />
        <div className="banner-text">
          <h1 id="title">
            {movieDetails.original_title} <span>({yearReleaseDate})</span>
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
          <p>{movieDetails.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsBanner;