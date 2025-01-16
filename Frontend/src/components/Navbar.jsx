import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import "../styles/searchOverlay.css";
import Brand from "./Brand";
import { useTheme } from "../themes/Theme";

const Navbar = ({ onSearch }) => {
  const location = useLocation();
  const navigate = useNavigate(); // React Router's navigate hook
  const { theme } = useTheme(); // Destructure theme object from ThemeContext
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Track the search term
  const [loading, setLoading] = useState(false); // Track API call state

  const handleNavToggle = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen((prevState) => !prevState);
  };

  const handleSearchSubmit = async () => {
    setLoading(true);
    try {
      // Update the URL with the search query
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);

      // Fetch the products
      const response = await fetch(
        `/products?search=${encodeURIComponent(searchTerm)}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      console.log(data);

      onSearch(data); // Pass the fetched products to the parent component
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
      setIsSearchOpen(false); // Close the search overlay after searching
    }
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.logoHamburgerContainer}>
        <Brand /> {/* Brand component */}
        <button
          className={styles.hamburger}
          aria-label="Toggle navigation"
          onClick={handleNavToggle}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </button>
      </div>

      <nav
        className={`${styles.navbarNav} ${isNavOpen ? styles.open : ""}`}
        style={{ color: theme.primaryColor }}
      >
        <ul className={styles.navList}>
          {["Home", "About", "Products", "Services", "Contact", "FAQ"].map(
            (item) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              return (
                <li key={item} className={styles.navItem}>
                  <Link
                    to={path}
                    className={`${styles.navLink} ${
                      location.pathname === path ? styles.active : ""
                    }`}
                    style={{ color: theme.primaryColor }}
                  >
                    {item}
                  </Link>
                </li>
              );
            }
          )}
        </ul>
        <button
          className={styles.searchButton}
          aria-label="Search"
          onClick={handleSearchToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
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
                onChange={(e) => setSearchTerm(e.target.value)} // Update the search term
              />
              <button
                className="searchIcon"
                onClick={handleSearchSubmit}
                disabled={loading}
              >
                {loading ? (
                  "Loading..."
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
