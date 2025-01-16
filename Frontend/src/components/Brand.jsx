import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Brand.module.css";
import Image from "./Image";

const Brand = () => {
  return (
    <div className={styles.navbarLogo}>
      <Link className={styles.logoPlaceholder} to="/">
        <img src="\src\assets\logos\smLogo.png" alt="" />
      </Link>
    </div>
  );
};

export default Brand;
