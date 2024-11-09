import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Brand.module.css';

const Brand = () => {
  return (
    <div className={styles.navbarLogo}>
      <Link className={styles.logoPlaceholder} to="/">
        <img src="../src/assets/smLogo.png" alt="Logo" />
      </Link>
    </div>
  );
};

export default Brand;
