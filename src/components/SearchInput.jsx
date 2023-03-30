import React from "react";
import styles from "./styles.module.scss";

const SearchInput = ({
  resetAC,
  getMovies,
  searchText,
  total_results,
  setSearchTextAC,
}) => {
  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearchTextAC(searchText);
  };

  const findMovie = () => {
    if (searchText) {
      getMovies();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      findMovie();
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={searchText}
        onChange={handleSearch}
        placeholder="Enter search term"
        className={styles.searchInput}
        onKeyDown={handleKeyDown}
      />
      <span
        role="img"
        aria-label="delete"
        onClick={resetAC}
        className={styles.reset}
      >
        ✖
      </span>

      {total_results ? (
        <button
          disabled
          style={{ cursor: "auto" }}
          className={styles.searchButton}
        >
          Found movies: {total_results}
        </button>
      ) : (
        <button onClick={findMovie} className={styles.searchButton}>
          Find movie
        </button>
      )}
    </div>
  );
};

export default SearchInput;
