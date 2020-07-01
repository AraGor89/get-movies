import React from "react";
import styles from "./styles.module.scss";
import tmdb from "../assets/images/tmdb.jpg";

const ListItemsContainer = ({ movie }) => {
  const imgBaseUrl = "https://image.tmdb.org/t/p/w185";
  return (
    <div className={styles.listItemsContainer}>
      <div className={styles.imageContainer}>
        <img
          src={movie.poster_path ? imgBaseUrl + movie.poster_path : tmdb}
          alt="movie"
        />
      </div>
      <div className={styles.listPropertyContainer}>
        <span className={styles.movieName}>
          <b>Title:</b> {movie.title}
        </span>
        <br />
        <br />
        <span>
          <b>Original language:</b> {movie.original_language}
        </span>
        <br />
        <span>
          <b>Popularity:</b> {movie.popularity}
        </span>
        <br />
        <span>
          <b>Release date:</b> {movie.release_date}
        </span>
        <br />
        <span>
          <b>Vote average:</b> {movie.vote_average}
        </span>
        <br />
        <span>
          <b>Vote count:</b> {movie.vote_count}
        </span>
        <br />
        <span>
          <b>Overview:</b> {movie.overview}
        </span>
        <br />
        <a href={"https://www.themoviedb.org/movie/" + movie.id} target="blank">
          <button>View movie</button>
        </a>
      </div>
    </div>
  );
};
export default ListItemsContainer;
