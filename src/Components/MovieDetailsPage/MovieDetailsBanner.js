import React from "react";
import moment from "moment";

const MovieDetailsBanner = ({
  backgroundImg,
  poster,
  title,
  releaseDate,
  overview
}) => {
  const yearReleaseDate = moment(releaseDate).format(`YYYY`);
  const formattedReleaseDate = moment(releaseDate).format(`MM/DD/YYYY`);
  const styles = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w780${backgroundImg})`
  };

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
              <span>Run time</span>
            </li>
          </div>
          <h1>Overview</h1>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsBanner;