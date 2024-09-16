import React from 'react';
// import styles from '..ContactUsTwo.module.css'; // Importing our module CSS
import styles from '../styles/ContactUsTwo.module.css'

function ContactUss() {
  return (
    <div className={styles.container}>
      <h2>Contact Us</h2>
      <p>To find out more about how we can assist you with your engineering equipment needs...</p>
      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <span className="material-icons">Email</span>
          <span>stormmachinery@163.com</span>
        </div>
        <div className={styles.contactItem}>
          <span className="material-icons">Address</span>
          <span>Mingsheng Building, Jinan City, Shandong Province</span>
        </div>
        <div className={styles.contactItem}>
          <span className="material-icons">Phone</span>
          <span>+86 150 6612 2602</span>
        </div>
      </div>
    </div>
  );
}

export default ContactUss;
