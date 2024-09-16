import React from 'react';
import Professinalism from '../components/Professionalism';
import AdvantagesSection from '../components/AdvantagesSection';
import OurAdvantages from '../components/OurAdvantages';
const images = [
  'src/assets/ourAdvPictures/redTruckOnTroller.jpg',
  'src/assets/ourAdvPictures/ship.jpg',
  'src/assets/ourAdvPictures/whiteTruckLifting.jpg',
];

function Services() {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <p>We provide top-notch export services tailored to your needs.</p>
      <OurAdvantages images={images} />
      <Professinalism imageSrc="src\assets\HotSaleOne.jpg" />
    </div>

  );
}

export default Services;
