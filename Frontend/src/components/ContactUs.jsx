import React from 'react';
import styles from '../styles/ContactUs.module.css';
// import contactus from '../assets/contactus.jpeg'; 

function ContactUs() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Contact Us</h1>
                <div className={styles.stars}>
                    <span className={styles.star}>★★★★★</span>
                </div>
            </div>
            <div className={styles.content}>
                <p>
                    Our products cover all kinds of trucks and trailers, which are widely
                    used in engineering construction, cargo transportation and other
                    fields. Whether it is heavy-load transportation or the challenge of
                    complex road conditions, our equipment can provide the best
                    performance. In addition to sales, we provide comprehensive
                    after-sales service and technical support to ensure that customers
                    get the most satisfactory experience.
                </p>
                <div className={styles.contactInfo}>
                    <p>WhatsApp: +86 150 6612 2602</p>
                    <p>Email: stormmachinery@163.com</p>
                </div>
            </div>

            {/* <img src={contactus} alt="Contact Us" className={styles.image} /> */}
        </div>
    );
}

export default ContactUs;