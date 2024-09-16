import React, { useState } from 'react';
import styles from '../styles/FAQPayment.module.css';
import faqpayment from '../assets/faqpayment.jpg'; 

function FAQPayment() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Common Questions About Payment and Transportation</h1>
      <div className={styles.content}>
        <img src={faqpayment} alt="Trucks on a ship" className={styles.image} />
        <div className={styles.faqItems}>
          {['What payment methods do you accept?', 'How are shipping costs calculated?', 'How long does the export process usually take?', 'How can I track my order?'].map((question, index) => (
            <div key={index} className={styles.faqItem}>
              <h2 onClick={() => toggleAnswer(index)}>
                {activeIndex === index ? '➖' : '➕'} {question}
              </h2>
              {activeIndex === index && (
                <p>
                  {index === 0 && 'We accept multiple payment methods, including telegraphic transfer, letter of credit, and financing services for installment payments.'}
                  {index === 1 && 'Shipping costs are calculated based on the destination, type of truck, and desired speed of transport. We will provide a detailed quote.'}
                  {index === 2 && 'From order confirmation to truck delivery, the entire process typically takes 4 to 6 weeks, depending on the destination and logistics arrangements.'}
                  {index === 3 && 'You will receive an order tracking number and can monitor the status of your truck shipment in real-time through our customer service system.'}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQPayment;










