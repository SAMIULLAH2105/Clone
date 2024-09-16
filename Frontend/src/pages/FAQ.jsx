import React from 'react';
import FAQPayment from '../components/FAQPayment';
import FAQpage from '../components/FAQpage';

function FAQ() {
  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <p>Find answers to common questions about our truck export process.</p>
      <FAQpage/>
      <FAQPayment/>
    </div>
  );
}

export default FAQ;
