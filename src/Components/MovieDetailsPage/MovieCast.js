import React, { useState, useEffect } from "react";
import MovieCastCard from "./MovieCastCard";

const MovieCast = ({ id, APIKEY }) => {
  const myAbortController = new AbortController();
  const [credits, setCredits] = useState({});
  const cast = Array.from(credits);

  useEffect(() => {
    const fetchCredits = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}`,

        { signal: myAbortController.signal }
      );
      const jsonResponse = await response.json();
      setCredits(jsonResponse.cast);

      return () => {
        console.log("Component unmounted");
        myAbortController.abort();
      };
    };
    fetchCredits();
  }, []);

  return (
    <>
      <h1>Movie Cast</h1>
      <div className="movie-cast-card-container">
        {cast.map((item, index) => {
          return (
            <MovieCastCard
              key={index}
              image={item.profile_path}
              Actorname={item.name}
              Charactername={item.character}
            />
          );
        })}
      </div>
    </>
  );
};

export default MovieCast;