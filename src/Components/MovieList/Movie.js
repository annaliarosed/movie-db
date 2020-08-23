import React from "react";
import moment from "moment";

const Movie = (props) => {
  const releaseDate = moment(props.releaseDate).format(`MMM D, YYYY`);

  return (
    <div className="movie">
      {props.image == null ? (
        <img
          id="no-photo"
          src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
          alt="fghjhg"
        />
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/w185${props.image}`}
          alt="fghjhg"
        />
      )}
      <p>{props.originalTitle}</p>
      <p>{releaseDate}</p>
    </div>
  );
};

export default Movie;