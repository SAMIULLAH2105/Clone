import React, { useState } from 'react';
import styles from '../styles/FAQPurchasing.module.css';

function FAQItem({ title, content, isOpen, onToggle }) {
    return (
        <div className={styles.faqItem}>
            <h2 onClick={onToggle} className={styles.faqTitle}>
                {isOpen ? '\u2796' : '\u2795'} {title}
            </h2>
            {isOpen && <p className={styles.faqContent}>{content}</p>}
        </div>
    );
}

function FAQPurchasing() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [name, setName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [message, setMessage] = useState('');

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const whatsappNumber = '923331234567'; // Your WhatsApp number
        const encodedMessage = encodeURIComponent(`Name: ${name}\nWhatsApp: ${whatsapp}\nMessage: ${message}`);
        const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(url, '_blank');
    };

    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <h1>Common Questions About Purchasing Used Trucks</h1>
                <div className={styles.questions}>
                    {[{
                        title: 'How is the quality of the trucks assured?',
                        content: 'All our used trucks undergo rigorous quality inspection and certification before sale to ensure they meet international export standards.'
                    },
                    {
                        title: 'What types of trucks are available?',
                        content: 'We offer a variety of used trucks including light, medium, and heavy-duty models to satisfy different transportation needs.'
                    },
                    {
                        title: 'What is the purchase process?',
                        content: 'The purchasing process includes consultation on requirements, selection of vehicle, quality inspection, price negotiation, contract signing, payment arrangement, and logistics transportation.'
                    },
                    {
                        title: 'Do you provide after-sales service?',
                        content: 'Yes, we offer comprehensive after-sales service, including warranty, technical support, and parts supply.'
                    }]
                    .map((faq, index) => (
                        <FAQItem
                            key={index}
                            title={faq.title}
                            content={faq.content}
                            isOpen={activeIndex === index}
                            onToggle={() => toggleAnswer(index)}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.rightSection}>
                <h2>If you are interested, please contact us</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

                    <label htmlFor="whatsapp">WhatsApp<span className={styles.requiredAsterisk}>*</span></label>
                    <input type="text" id="whatsapp" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} required />

                    <label htmlFor="message">Message<span className={styles.requiredAsterisk}>*</span></label>
                    <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default FAQPurchasing;
