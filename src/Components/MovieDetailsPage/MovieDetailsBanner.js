import React from "react";
import moment from "moment";
import { useState, useEffect } from "react";

const MovieDetailsBanner = ({ id, APIKEY }) => {
  const myAbortController = new AbortController();
  const [movieDetails, setMovieDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const [trailer, setTrailer] = useState({});
  const [rating, setRating] = useState([]);
  const yearReleaseDate = moment(movieDetails.release_date).format(`YYYY`);
  const formattedReleaseDate = moment(movieDetails.release_date).format(
    `MM/DD/YYYY`
  );
  const styles = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w780${movieDetails.backdrop_path})`
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&append_to_response=videos,release_dates`,
        { signal: myAbortController.signal }
      );
      const jsonData = await data.json();
      setMovieDetails(jsonData);
      setGenres(jsonData.genres);
      setTrailer(jsonData.videos.results[0]);
      setRating(
        jsonData.release_dates.results.find((x) => x.iso_3166_1 === "US")
          .release_dates[0]
      );
    };
    fetchMovieDetails();
    return () => {
      console.log("Component unmounted");
      myAbortController.abort();
    };
  }, []);

  return (
    <div className="banner-container" style={styles}>
      <div className="banner">
        <img
          id="movie-details-poster"
          src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`}
          alt="movie poster"
        />
        <div className="banner-text">
          <h1 id="title">
            {movieDetails.original_title} <span>({yearReleaseDate})</span>
          </h1>
          <div className="under-title-data">
            <span id="rating">
              {rating.certification ? rating.certification : "N/A"}
            </span>
            <li>
              <span>{formattedReleaseDate}</span>
            </li>
            <li>
              {genres.map((item) => (
                <span>{item.name}</span>
              ))}
            </li>
            <li>
              <span>{movieDetails.runtime} minutes</span>
            </li>
          </div>
          <h1>Overview</h1>
          <p className="overview">{movieDetails.overview}</p>
          <div className="buttons-wrapper">
            {trailer.site === "YouTube" ? (
              <a
                className="trailer"
                target="_blank"
                href={`https://www.youtube.com/watch?v=${trailer.key}`}
              >
                Play trailer
              </a>
            ) : (
              <a
                className="trailer"
                target="_blank"
                href={`https://vimeo.com/${trailer.key}`}
              >
                Play trailer
              </a>
            )}
            <a
              className="play-movie"
              href={`https://www.themoviedb.org/movie/${id}/watch?language=en-US`}
            >
              Play movie
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsBanner;