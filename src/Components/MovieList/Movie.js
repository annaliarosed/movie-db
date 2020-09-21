import React from "react";
import moment from "moment";

const Movie = ({ releaseDate, image, originalTitle, id }) => {
  const formattedReleaseDate = moment(releaseDate).format(`MMM D, YYYY`);

  return (
    <div className="movie">
      {image == null ? (
        <img
          id="no-photo"
          src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
          alt="not available"
        />
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/w185${image}`}
          alt="movie poster"
        />
      )}
      <p className="movie-title">{originalTitle}</p>
      <p className="movie-release-date">{formattedReleaseDate}</p>
    </div>
  );
};

export default Movie;