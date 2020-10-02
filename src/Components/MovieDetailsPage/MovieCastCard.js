import React, { useEffect, useState } from "react";

const MovieCastCard = ({ image, actorName, characterName, APIKEY }) => {
  const myAbortController = new AbortController();
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const personResponse = await fetch(
        `https://api.themoviedb.org/3/search/person?api_key=${APIKEY}&page=1&query=${actorName}`,
        { signal: myAbortController.signal }
      );
      const jsonResponse = await personResponse.json();
      setPeople(jsonResponse.results[0]);

      return () => {
        console.log("Component unmounted");
        myAbortController.abort();
      };
    };
    fetchPeople();
  }, [actorName]);

  console.log(people.id);

  return (
    <div className="cast-card">
      <a
        href={`https://www.themoviedb.org/person/${people.id}`}
        className="actor-link"
      >
        {image ? (
          <img
            src={`https://image.tmdb.org/t/p/w185${image}`}
            alt="movie poster"
          />
        ) : (
          <p className="no-cast-photo">no image available</p>
        )}
        <div className="name-container">
          <h3 className="actor">{actorName}</h3>
          <p className="character">{characterName}</p>
        </div>
      </a>
    </div>
  );
};

export default MovieCastCard;
