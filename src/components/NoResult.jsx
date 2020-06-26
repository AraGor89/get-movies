import React from "react";
import styles from "./styles.module.scss";
import noResult from "../assets/images/no-results.png1.png";

const NoResult = () => {
  return (
    <div className={styles.noResultContainer}>
      <h1>Sorry, but we could not find a movie with that name.</h1>
      <img src={noResult} alt="no-result" />
    </div>
  );
};

export default NoResult;
