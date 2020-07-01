import React from "react";
import styles from "./styles.module.scss";
import ListItemsContainer from "./ListItemsContainer";

const Lists = ({ movies }) => {
  return (
    <div className={styles.listsContainer}>
      {movies &&
        movies.map((movie) => (
          <ListItemsContainer movie={movie} key={movie.id} />
        ))}
    </div>
  );
};

export default Lists;
