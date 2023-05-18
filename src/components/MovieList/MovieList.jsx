import React from "react";
import "./MovieList.scss";
import Movie from "../Movie/Movie";

const MovieList = ({ data }) => {
  return (
    <main className="movie-container">
      <div className="movie-container__inner">
        {data.results.map((item) => {
          return (
            <Movie
              key={item.episode_id}
              title={item.title}
              release_date={item.release_date}
              opening_crawl={item.opening_crawl}
            />
          );
        })}
      </div>
    </main>
  );
};

export default MovieList;
