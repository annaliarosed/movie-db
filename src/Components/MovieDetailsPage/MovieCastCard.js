import React from "react";

const MovieCastCard = ({ image, Actorname, Charactername }) => {
  return (
    <div className="cast-card">
      {image == null ? (
        <img
          id="no-photo"
          src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
          alt="poster not available"
        />
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/w185${image}`}
          alt="movie poster"
        />
      )}
      <div className="name-container">
        <h3 className="actor">{Actorname}</h3>
        <p className="character">{Charactername}</p>
      </div>
    </div>
  );
};

export default MovieCastCard;
