import React from "react";
import styles from "./styles.module.scss";
import logo from "../assets/images/logo.png1.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Header;
