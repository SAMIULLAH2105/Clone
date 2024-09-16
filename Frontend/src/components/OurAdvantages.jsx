import React from 'react';
import styles from '../styles/Advantages.module.css';

const OurAdvantages = ({ images }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Our Advantages</h2>
      <div className={styles.imageGrid}>
        {images.map((imageSrc, index) => (
          <div key={index} className={styles.imageWrapper}>
            <img src={imageSrc} alt={`Advantage ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurAdvantages;
