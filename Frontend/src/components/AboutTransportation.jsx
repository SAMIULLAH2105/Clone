import React from 'react';
import styles from '../styles/AboutTransportation.module.css'; 
import aboutImage from '../assets/about.jpg'; 

function AboutTruckTransportation() {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>ABOUT TRUCK <br/> TRANSPORTATION</h1>
          <div className={styles.section}>
            <div className={styles.circle}>
              <div className={styles.dot} />
            </div>
            <div className={styles.textContent}>
              <h3 className={styles.heading}>LAND SHIPPING</h3>
              <p className={styles.paragraph}>
                We have a professional land transportation team, and the trucks will
                be reinforced before transportation to ensure safe arrival.
              </p>
            </div>
          </div>
          
          <div className={styles.section}>
            <div className={styles.circle}>
              <div className={styles.dot} />
            </div>
            <div className={styles.textContent}>
              <h3 className={styles.heading}>SEA TRANSPORT</h3>
              <p className={styles.paragraph}>
                We cooperate with large shipping companies. The trucks are waxed and
                treated for rust prevention before shipment. After loading, they will
                be well reinforced to ensure the safety of the trucks.
              </p>
            </div>
          </div>
        </div>
        
        <img src={aboutImage} alt="Truck Transportation" className={styles.image} />
      </div>
    </div>
  );
}

export default AboutTruckTransportation;