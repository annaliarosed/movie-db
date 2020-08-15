import React from "react";

const Movie = (props) => {
  return (
    <div>
      {props.image == null ? (
        <img
          src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
          alt="fghjhg"
        />
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/w185${props.image}`}
          alt="fghjhg"
        />
      )}
    </div>
  );
};

export default Movie;