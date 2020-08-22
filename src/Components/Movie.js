import React from "react";

const Movie = (props) => {
  return (
    <div className="movie">
      {props.image == null ? (
        <img
          id="no-photo"
          src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
          alt="Movie poster not available"
        />
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/w185${props.image}`}
          alt="Movie poster"
        />
      )}
      <h6>{props.originalTitle}</h6>
      <p>{props.releaseDate}</p>
    </div>
  )
};

export default Movie;