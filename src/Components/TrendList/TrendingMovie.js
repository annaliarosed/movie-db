import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const TrendingMovie = ({ releaseDate, image, originalTitle, id }) => {
  const formattedReleaseDate = moment(releaseDate).format(`MMM D, YYYY`);

  return (
    <div className="movie">
      <Link to={`/Components/${id}`}>
        {image == null ? (
          <img
            id="no-photo"
            src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
            alt="fghjhg"
          />
        ) : (
          <img src={`https://image.tmdb.org/t/p/w185${image}`} alt="fghjhg" />
        )}
      </Link>
      <Link to={`/Components/${id}`}>
        <p className="movie-title">{originalTitle}</p>
      </Link>
      <p className="movie-release-date">{formattedReleaseDate}</p>
    </div>
  );
};

export default TrendingMovie;