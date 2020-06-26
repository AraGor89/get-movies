import React from "react";
import styles from "./styles.module.scss";
import error404 from "../assets/images/error404.png";

const Error = ({ error }) => {
  return (
    <div className={styles.errorContainer}>
      <h1> {error}</h1>
      <img src={error404} alt="error" />
    </div>
  );
};

export default Error;
