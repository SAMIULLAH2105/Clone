import React, { useEffect, useState } from 'react';
import WhatsAppIcon from '../assets/whatsapp.svg'; 
import styles from '../styles/WhatsappButton.module.css';

const WhatsappButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        const whatsappNumber = "923363653236"; // Your WhatsApp number
        const message = "Hello! I have a question."; // default message
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(url, "_blank");
    };

    return (
        visible && (
            <button className={styles.whatsappButton} onClick={handleClick}>
                <img src={WhatsAppIcon} alt="WhatsApp" className={styles.icon} />
            </button>
        )
    );
};

export default WhatsappButton;

