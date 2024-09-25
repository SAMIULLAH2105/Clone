import React from 'react';
import Professinalism from '../components/Professionalism';
import AdvantagesSection from '../components/AdvantagesSection';
import OurAdvantages from '../components/OurAdvantages';
import ContactUs from '../components/ContactUs';

import AboutHeader from '../components/AboutHeader';
import FooterTop from '../components/FooterTop';
const images = [
  'src/assets/ourAdvPictures/redTruckOnTroller.jpg',
  'src/assets/ourAdvPictures/ship.jpg',
  'src/assets/ourAdvPictures/whiteTruckLifting.jpg',
];

function Services() {
  return (
    <div className="services">
      <AboutHeader heading="Our Services" text="Shandong Storm Machinery Co., Ltd.’s expertise in engineering equipment and unwavering commitment to customer service ensure that we can continue to provide excellent products and services to customers around the world." />
      <OurAdvantages images={images} />
      
      <Professinalism imageSrc="src\assets\HotSaleOne.jpg" />
      <ContactUs/>
      <FooterTop/>
    </div>

  );
}

export default Services;
