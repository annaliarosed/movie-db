import React from "react";
import TrendingMovie from "./TrendingMovie";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TrendList = ({ api }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const getTrending = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/trending/movie/${
          isDay ? "day" : "week"
        }?api_key=${api}`
      );
      const jsonData = await data.json();
      setTrendingMovies(jsonData.results);
    };
    getTrending();
  }, [api, isDay]);

  return (
    <>
      <div className="trending-wrapper">
        <h1>Trending</h1>
        <button onClick={() => setIsDay(true)}>day</button>
        <button onClick={() => setIsDay(false)}>week</button>
      </div>
      <div className="movie-container">
        {trendingMovies.map((movie, index) => {
          return (
            <Link to={`/movie/${movie.id}`}>
              <TrendingMovie
                key={index}
                image={movie.poster_path}
                originalTitle={movie.original_title}
                releaseDate={movie.release_date}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default TrendList;
