import React from 'react';
import styles from '../styles/FooterTop.module.css';
import { Link } from 'react-router-dom';

function FooterTop() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>STORM</h1>
        <h1>MACHINERY</h1>
        <p>Our products cover all types of trucks and trailers, which are widely used in engineering construction, cargo transportation and other fields. Whether it is heavy-load transportation or complex road conditions, our equipment can provide the best performance.</p>
      </div>
      <div className={styles.right}>
        <h3>STORM MACHINERY</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default FooterTop;
