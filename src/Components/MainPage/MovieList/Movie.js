import React from "react";
import moment from "moment";
import "./movie.css";

const Movie = ({ releaseDate, image, originalTitle, vote }) => {
  const formattedReleaseDate = moment(releaseDate).format(`MMM D, YYYY`);

  return (
    <div className="movie">
      <p className="avg-movie-vote">{vote}</p>
      <div className="movie-poster-wrapper">
        {image ? (
          <img
            className="movie-poster"
            src={`https://image.tmdb.org/t/p/w185${image}`}
            alt="movie poster"
          />
        ) : (
          <p className="no-movie">no image available</p>
        )}
      </div>
      <p className="movie-title">{originalTitle}</p>
      <p className="movie-release-date">{formattedReleaseDate}</p>
    </div>
  );
};

export default Movie;
