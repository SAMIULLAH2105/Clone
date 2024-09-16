import React from 'react';
import styles from '../styles/AdvantagesSection.module.css';

const AdvantagesSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>Our Advantages</h2>
        <p className={styles.description}>
          We have established a solid market foundation in the African and South American markets. By deeply understanding the specific needs of the local markets, we continuously adjust our products and services to ensure that our solutions can effectively help customers overcome the transportation and logistics challenges they encounter locally.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src="src\assets\yellowtruck.jpg" alt="Advantages" className={styles.image} />
      </div>
    </div>
  );
};

export default AdvantagesSection;
