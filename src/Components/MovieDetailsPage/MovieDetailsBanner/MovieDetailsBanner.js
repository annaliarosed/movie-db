import React from "react";
import moment from "moment";
import { useState, useEffect } from "react";
import "./moviedetailsbanner.css";

const MovieDetailsBanner = ({ id, APIKEY }) => {
  const [movieDetails, setMovieDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const [trailer, setTrailer] = useState({});
  const [trailerUrl, setTrailerUrl] = useState("");
  const [rating, setRating] = useState([]);
  const yearReleaseDate = moment(movieDetails.release_date).format(`YYYY`);
  const formattedReleaseDate = moment(movieDetails.release_date).format(
    `MM/DD/YYYY`
  );
  const styles = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w780${movieDetails.backdrop_path})`,
  };
  const bulletPoint = String.fromCharCode(8226);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&append_to_response=videos,release_dates`
      );
      const jsonData = await data.json();
      setMovieDetails(jsonData);
      setGenres(jsonData.genres ? jsonData.genres : "no genres available");
      setTrailer(jsonData.videos.results[0]);
      setRating(
        jsonData.release_dates.results.length > 0 &&
          jsonData.release_dates.results.find((x) => x.iso_3166_1 === "US")
          ? jsonData.release_dates.results.find((x) => x.iso_3166_1 === "US")
              .release_dates[0]
          : ""
      );
    };
    fetchMovieDetails();
  }, []);

  return (
    <div
      className={
        movieDetails.backdrop_path
          ? "banner-container"
          : "no-movie-banner-container"
      }
      style={movieDetails.backdrop_path && styles}
    >
      <div className="banner">
        <div className="movie-details-poster-wrapper">
          {movieDetails.poster_path ? (
            <img
              id="movie-details-poster"
              src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`}
              alt="movie poster"
            />
          ) : (
            <p className="no-movie-poster">no image available</p>
          )}
        </div>
        <div className="banner-text">
          <h1 id="title">
            {movieDetails.original_title}{" "}
            {movieDetails.release_date && `(${yearReleaseDate})`}
          </h1>
          <div className="under-title-data">
            <p id="rating">
              {rating.certification ? rating.certification : "N/A"}
            </p>
            <p>
              {movieDetails.release_date &&
                `${bulletPoint} ${formattedReleaseDate}`}
            </p>
            {genres &&
              genres.map((item, index) => (
                <p key={index}>
                  {index === genres.length - 1 || genres.length === 1
                    ? `${genres.length === 1 ? bulletPoint : ""} ${item.name}`
                    : index === 0
                    ? `${bulletPoint} ${item.name}${
                        genres.length === 1 ? "" : ","
                      }`
                    : `${item.name},`}
                </p>
              ))}
            <p>
              {movieDetails.runtime > 0 &&
                `${bulletPoint} ${movieDetails.runtime} minutes`}
            </p>
          </div>
          <h1 id="overview">Overview</h1>
          <p>{movieDetails.overview}</p>
          <div className="buttons-wrapper">
            {trailer ? (
              <a
                className="trailer"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trailer.site === "YouTube"
                    ? setTrailerUrl("https://www.youtube.com/watch?v=")
                    : setTrailerUrl("https://vimeo.com/");
                }}
                href={`${trailerUrl}${trailer.key}`}
              >
                Play trailer
              </a>
            ) : (
              <p className="trailer" id="no-trailer">
                No trailer available
              </p>
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
