import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navItems = ['Home', 'About', 'Product', 'Services', 'Contact', 'FAQ'];

  const handleNavToggle = () => {
    setIsNavOpen(prevState => !prevState);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <div className={styles.logoPlaceholder}>
          <img src="../src/assets/smLogo.png" alt="Logo" />
        </div>
        <h1 className={styles.navbarTitle}>TRUCK EXPORT</h1>
      </div>
      <button className={styles.hamburger} aria-label="Toggle navigation" onClick={handleNavToggle}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </button>
      <nav className={`${styles.navbarNav} ${isNavOpen ? styles.open : ''}`}>
        <ul className={styles.navList}>
          {navItems.map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            return (
              <li key={item} className={styles.navItem}>
                <Link
                  to={path}
                  className={`${styles.navLink} ${location.pathname === path ? styles.active : ''}`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
        <button className={styles.searchButton} aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
