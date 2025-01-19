import React from 'react';
import Professinalism from '../components/Professionalism';
import AdvantagesSection from '../components/AdvantagesSection';
import OurAdvantages from '../components/OurAdvantages';
import ContactUs from '../components/ContactUs';
import AboutHeader from '../components/AboutHeader';
import FooterTop from '../components/FooterTop';

// Import images properly
import redTruckImage from '../assets/ourAdvPictures/redTruckOnTroller.jpg';
import shipImage from '../assets/ourAdvPictures/ship.jpg';
import whiteTruckImage from '../assets/ourAdvPictures/whiteTruckLifting.jpg';
import hotSaleImage from '../assets/HotSaleOne.jpg';

// Use imported images
const images = [
  redTruckImage,
  shipImage,
  whiteTruckImage,
];

function Services() {
  return (
    <div className="services">
      <AboutHeader 
        heading="Our Services" 
        text="Shandong Storm Machinery Co., Ltd.'s expertise in engineering equipment and unwavering commitment to customer service ensure that we can continue to provide excellent products and services to customers around the world." 
      />
      <OurAdvantages images={images} />
      <Professinalism imageSrc={hotSaleImage} />
      <ContactUs/>
      <FooterTop/>
    </div>
  );
}

export default Services;