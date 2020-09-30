import React from "react";
import TrendingMovie from "./TrendingMovie";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./trendlist.css";

const TrendList = ({ APIKEY }) => {
  const myAbortController = new AbortController();
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const getTrending = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/trending/movie/${
          isDay ? "day" : "week"
        }?api_key=${APIKEY}`,
        { signal: myAbortController.signal }
      );
      const jsonData = await data.json();
      setTrendingMovies(jsonData.results);

      return () => {
        console.log("Component unmounted");
        myAbortController.abort();
      };
    };
    getTrending();
  }, [APIKEY, isDay]);

  return (
    <div className="trending-container">
      <div className="trending-wrapper">
        <h1>Trending</h1>
        <button
          onClick={() => setIsDay(true)}
          className={`btn ${isDay ? " active" : ""}`}
        >
          DAY
        </button>
        <button
          onClick={() => setIsDay(false)}
          className={`btn ${!isDay ? " active" : ""}`}
        >
          WEEK
        </button>

        <div className="trending-movie-container">
          {trendingMovies.map((movie, index) => {
            return (
              <Link to={`/movie/${movie.id}`} key={index} className="link">
                <TrendingMovie
                  vote={movie.vote_average}
                  image={movie.poster_path}
                  originalTitle={movie.original_title}
                  releaseDate={movie.release_date}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrendList;
