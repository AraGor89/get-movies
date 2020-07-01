import React from "react";
import loading from "../assets/images/loading4.gif";
import styles from "./styles.module.scss";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <img src={loading} alt="loading" />
    </div>
  );
};
export default Loading;
