import React from 'react';
import styles from '../styles/Description.module.css';
import { FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 
import { useTheme } from "../themes/Theme";
const Description = ({ heading, subheading, description, buttonText }) => {
  const { theme } = useTheme();  // Destructure theme from the useTheme hook
  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate('/contact'); 
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 >{subheading}</h2>
        <h1>{heading}</h1>
        <p>{description}</p>

      
        {buttonText && (
          <button  className={styles.contactButton} onClick={handleClick} style={{ backgroundColor: theme.primaryColor }}><FaArrowDown />{buttonText}</button>
        )}
      </div>
    </div>
  );
}

export default Description;
