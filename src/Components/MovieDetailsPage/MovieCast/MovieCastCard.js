import React, { useEffect, useState } from "react";
import "./moviecastcard.css";

const MovieCastCard = ({ image, actorName, characterName, APIKEY }) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const personResponse = await fetch(
        `https://api.themoviedb.org/3/search/person?api_key=${APIKEY}&page=1&query=${actorName}`,
      );
      const jsonResponse = await personResponse.json();
      setPeople(jsonResponse.results[0]);
    };
    fetchPeople();
  }, [actorName]);

  return (
    <a
      href={`https://www.themoviedb.org/person/${people.id}`}
      className="cast-card"
      target="_blank"
      rel="noreferrer"
    >
      <div className="cast-card__image-wrap">
        {image ? (
          <img
            src={`https://image.tmdb.org/t/p/w185${image}`}
            alt={actorName}
          />
        ) : (
          <p className="no-cast-photo">No image available</p>
        )}

        {/* Cinematic overlay — slides up on hover */}
        <div className="cast-card__overlay">
          <span className="cast-card__cta">View Profile →</span>
        </div>
      </div>

      <div className="name-container">
        <h3 className="actor">{actorName}</h3>
        <p className="character">{characterName}</p>
      </div>
    </a>
  );
};

export default MovieCastCard;
