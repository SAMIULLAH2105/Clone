import React from 'react'
import styles from "../styles/AboutHeader.module.css"

const AboutHeader = ({ heading, text, imageSrc }) => {
  return (
    <div className={styles.container}>
      {/* <img src={imageSrc} alt="About Us" className={styles.image} /> */}
      <div className={styles.textBlock}>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}

export default AboutHeader
