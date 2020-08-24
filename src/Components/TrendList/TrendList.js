import React, {useState, useEffect} from "react";
import TrendingMovie from "./TrendingMovie";

const TrendList = ({api}) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const getTrending = () => {
        fetch(
          `https://api.themoviedb.org/3/trending/movie/${
            isDay ? "day" : "week"
          }?api_key=${api}`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setTrendingMovies(data.results);
          });
      };
      getTrending()
  }, [isDay, api])

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
            <TrendingMovie
              key={index}
              image={movie.poster_path}
              originalTitle={movie.original_title}
              releaseDate={movie.release_date}
            />
          );
        })}
      </div>
    </>
  );
};

export default TrendList;