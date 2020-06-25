import React from "react";
import styles from "./styles.module.scss";
import tmdb from "../assets/images/tmdb.jpg";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={tmdb} alt="tmdbPIC" className={styles.tmdbIMAGE} />
      <span className={styles.headerText}>Movies DB search</span>
    </div>
  );
};

export default Header;
