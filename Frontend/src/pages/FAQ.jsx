import React from 'react';
import FAQPayment from '../components/FAQPayment';
import FAQpage from '../components/FAQpage';
import ContactForm from '../components/ContactForm';
import FAQPurchasing from '../components/FAQPurchasing';
import FooterTop from '../components/FooterTop';

function FAQ() {
  return (
    <div className="faq">
      <FAQpage/>
      <FAQPurchasing/>
      <FAQPayment/>
      <FooterTop/>
    </div>
  );
}

export default FAQ;
