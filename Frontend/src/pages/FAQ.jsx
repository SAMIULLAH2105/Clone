import React from 'react';
import FAQPayment from '../components/FAQPayment';
import FAQpage from '../components/FAQpage';
import ContactForm from '../components/ContactForm';

function FAQ() {
  return (
    <div className="faq">
      <FAQpage/>
      <ContactForm/>
      <FAQPayment/>
    </div>
  );
}

export default FAQ;
