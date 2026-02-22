import React from "react";
import moment from "moment";
import "./trendingmovie.css";

const TrendingMovie = ({ releaseDate, image, originalTitle, vote }) => {
  const formattedReleaseDate = moment(releaseDate).format(`MMM D, YYYY`);

  return (
    <div className="trending-movie">
      <p className="avg-vote">{vote}</p>

      <div className="trending-movie-poster-wrapper">
        {image ? (
          <img
            className="trending-movie-poster"
            src={`https://image.tmdb.org/t/p/w185${image}`}
            alt={originalTitle}
          />
        ) : (
          <p className="no-trending-movie">No image available</p>
        )}

        <div className="trending-movie__overlay">
          <span className="trending-movie__cta">View Movie →</span>
        </div>
      </div>

      <div className="trending-movie-info">
        <p className="trending-movie-title">{originalTitle}</p>
        <p className="trending-release-date">{formattedReleaseDate}</p>
      </div>
    </div>
  );
};

export default TrendingMovie;
