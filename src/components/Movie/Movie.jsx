import React from "react";
import "./Movie.scss";
import formatDate from "../../helpers/formatDate";

const Movie = ({ title, release_date, opening_crawl }) => {
  return (
    <div className="movie">
      <div className="movie__inner-box">
        <div className="movie__title">
          <h3>
            <a href="#">{title}</a>
          </h3>
          <span>{formatDate(release_date)}</span>
        </div>
        <p className="movie__details">{opening_crawl.substring(0, 260)}...</p>
        <p className="movie__link">
          <a href="#">More info</a>
        </p>
      </div>
    </div>
  );
};

export default Movie;
