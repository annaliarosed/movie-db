import React from "react";
import moment from "moment";

const TrendingMovie = ({ releaseDate, image, originalTitle, id, vote }) => {
  const formattedReleaseDate = moment(releaseDate).format(`MMM D, YYYY`);

  return (
    <div className="trending-movie">
      <p className="avg-vote">{vote}</p>
      {image == null ? (
        <img
          id="no-photo"
          src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
          alt="fghjhg"
        />
      ) : (
        <img src={`https://image.tmdb.org/t/p/w185${image}`} alt="fghjhg" />
      )}
      <p>{originalTitle}</p>
      <p>{formattedReleaseDate}</p>
    </div>
  );
};

export default TrendingMovie;
