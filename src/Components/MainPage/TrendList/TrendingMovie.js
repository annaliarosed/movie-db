import React from "react";
import moment from "moment";

const TrendingMovie = ({ releaseDate, image, originalTitle, id, vote }) => {
  const formattedReleaseDate = moment(releaseDate).format(`MMM D, YYYY`);

  return (
    <div className="trending-movie">
      <p className="avg-vote">{vote}</p>
      <div className="trending-movie-poster-wrapper">
        {image ? (
          <img
            className="trending-movie-poster"
            src={`https://image.tmdb.org/t/p/w185${image}`}
            alt="movie poster"
          />
        ) : (
          <p className="no-trending-movie">no image available</p>
        )}
      </div>
      <p className="trending-movie-title">{originalTitle}</p>
      <p className="trending-release-date">{formattedReleaseDate}</p>
    </div>
  );
};

export default TrendingMovie;
