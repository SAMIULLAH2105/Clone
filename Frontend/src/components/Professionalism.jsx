import React from 'react';
import styles from '../styles/Professinalism.module.css';

const Professinalism = ({ imageSrc }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src={imageSrc} alt="Placeholder" className={styles.image} />
        </div>
        <div className={styles.textSection}>
          <h3>Professionalism is the key to our success</h3>
          <h2>
            "Customized Solutions, Global Network, and Seasoned Expertise: 
            Our Key Advantages"
          </h2>
          <ul>
            <li>
              <h4>01</h4>
              <p>
                <strong>Customer customized service</strong>
                <br />
                We not only sell new and used trucks and trailers, but also provide customized services according to customer needs.
              </p>
            </li>
            <li>
              <h4>02</h4>
              <p>
                <strong>Strong sales and service</strong>
                <br />
                We have established a strong sales and service network in major market areas such as Africa and South America.
              </p>
            </li>
            <li>
              <h4>03</h4>
              <p>
                <strong>Professional quality control</strong>
                <br />
                We have an experienced team of professionals specializing in new trucks and refurbished used trucks with more than ten years of industry experience.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Professinalism;
