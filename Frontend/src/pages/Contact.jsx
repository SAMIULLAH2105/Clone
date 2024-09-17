import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactUs from '../components/ContactUs';
import FooterTop from '../components/FooterTop';
import ContactUss from '../components/ContactUsTwo';


function Contact() {
  return (
    
    <div className="contact">
      <ContactUss/>
      
      <ContactForm heading={"PLEASE CONTACT US"}/>
      <FooterTop/>
    </div>
    
  );
}

export default Contact;
