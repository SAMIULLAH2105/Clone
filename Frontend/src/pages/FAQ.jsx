import React from 'react';
import FAQPayment from '../components/FAQPayment';
import FAQpage from '../components/FAQpage';
import ContactForm from '../components/ContactForm';
import FAQPurchasing from '../components/FAQPurchasing';

function FAQ() {
  return (
    <div className="faq">
      <FAQpage/>
      <FAQPurchasing/>
      <FAQPayment/>
    </div>
  );
}

export default FAQ;
