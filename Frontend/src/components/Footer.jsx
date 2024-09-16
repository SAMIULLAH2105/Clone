import React from 'react';
import facebook from "../Assets/logos/facebook.svg";
import twitter from "../Assets/logos/twitter.svg";
import instagram from "../Assets/logos/instagram.svg";
import styles from '../styles/Footer.module.css'; 

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2024 SHANDONG STORM MACHINERY CO., LTD.</p>
            <ul className={styles.socialIcons}>
                <li>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="Twitter" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
