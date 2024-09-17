import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import '../styles/searchOverlay.css';
import { products } from './ProductData'; // Importing products array

const Navbar = ({ onSearch }) => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); 
  const [searchTerm, setSearchTerm] = useState(''); // Track the search term

  const handleNavToggle = () => {
    setIsNavOpen(prevState => !prevState);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(prevState => !prevState);
  };

  const handleSearchSubmit = () => {
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(filteredProducts); // Send the filtered products to the parent component
    setIsSearchOpen(false); // Close the search overlay after searching
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarLogo}>
      <Link className={styles.logoPlaceholder} to='/'>
          <img src="../src/assets/smLogo.png" alt="Logo" />
        </Link>
        <h1 className={styles.navbarTitle}>TRUCK EXPORT</h1>
      </div>
      <button className={styles.hamburger} aria-label="Toggle navigation" onClick={handleNavToggle}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </button>
      <nav className={`${styles.navbarNav} ${isNavOpen ? styles.open : ''}`}>
        <ul className={styles.navList}>
          {['Home', 'About', 'Product', 'Services', 'Contact', 'FAQ'].map(item => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            return (
              <li key={item} className={styles.navItem}>
                <Link to={path} className={`${styles.navLink} ${location.pathname === path ? styles.active : ''}`}>
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
        <button className={styles.searchButton} aria-label="Search" onClick={handleSearchToggle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </nav>

      {isSearchOpen && (
        <div className="searchOverlay">
          <button className="closeButton" onClick={handleSearchToggle}>
            &times;
          </button>
          <div className="searchContainer">
            <div className="searchBox">
              <input
                type="text"
                className="searchInput"
                placeholder="Search..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)} // Update the search term
              />
              <button className="searchIcon" onClick={handleSearchSubmit}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
