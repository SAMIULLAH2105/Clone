import React from 'react';
import Description from '../components/Description';
import AdvantagesSection from '../components/AdvantagesSection';
import Slider from '../components/Slider';
import Professionalism from '../components/Professionalism'
import AboutHeader from '../components/AboutHeader';
import FooterTop from '../components/FooterTop'

import imageSrc1 from "../assets/HotSaleOne.jpg";
import HotSaleProducts from '../components/HotSale';


function About() {
  return (
    <>
    <AboutHeader heading="ABOUT US" text="Our products cover all types of trucks and trailers, which are widely used in engineering construction, cargo transportation and other fields. Whether it is heavy-load transportation or complex road conditions, our equipment can provide the best performance." />
    
    <div className="about">


    </div>
    <div >
      
    <AdvantagesSection/>
    <Slider/>
    

    </div>
    
    <Professionalism imageSrc="src/assets/products/bigredTruck.jpg"/>
    <HotSaleProducts/>
    <FooterTop/>
    

 </>
  );
}

export default About;
