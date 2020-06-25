import React from "react";
import styles from "./styles.module.scss";

const SearchInput = ({ searchText, setSearchTextAC, getMovies }) => {
  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearchTextAC(searchText);
  };
  const findMovie = () => {
    if (searchText) {
      getMovies();
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
      />
      <button onClick={findMovie} className={styles.searchButton}>
        Find movie
      </button>
    </div>
  );
};

export default SearchInput;
