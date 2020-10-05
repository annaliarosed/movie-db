import React, { useState, useEffect } from "react";
import MovieCastCard from "./MovieCastCard";
import "./moviecast.css";

const MovieCast = ({ id, APIKEY }) => {
  const [credits, setCredits] = useState({});
  const cast = Array.from(credits);

  useEffect(() => {
    const fetchCredits = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}`
      );
      const jsonResponse = await response.json();
      setCredits(jsonResponse.cast);
    };
    fetchCredits();
  }, [id]);

  return (
    cast.length > 0 && (
      <div className="movie-cast-container">
        <h1 className="movie-cast-title">Movie Cast</h1>
        <div className="movie-cast-cards">
          {cast.map((item) => (
            <MovieCastCard
              APIKEY={APIKEY}
              key={item.cast_id}
              image={item.profile_path}
              actorName={item.name}
              characterName={item.character}
            />
          ))}
        </div>
      </div>
    )
  );
};

export default MovieCast;
