import React from 'react';
import styles from '../styles/Description.module.css';
import { FaArrowDown } from "react-icons/fa";

const Description = ({ heading, subheading, description, buttonText }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 >{subheading}</h2>
        <h1>{heading}</h1>
        <p>{description}</p>

      
        {buttonText && (
          <button  className={styles.contactButton}><FaArrowDown />{buttonText}</button>
        )}
      </div>
    </div>
  );
}

export default Description;
