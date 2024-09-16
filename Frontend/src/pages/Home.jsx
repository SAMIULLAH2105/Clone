import React from 'react';
import Description from '../components/Description';
import Refurbishment from '../components/Refurbishment';
import AboutTruckTransportation from '../components/AboutTransportation';
import FooterTop from '../components/FooterTop';
import HotSaleProducts from '../components/HotSale';
import ContactUs from '../components/ContactUs';
function Home() {
  return (<>
    <div className="home">
     
     <Description 
  heading="STORM MACHINERY" 
  subheading="Professional Truck Export Company" 
  description="We are a construction equipment sales business focused on providing high quality, high performance new and used trucks and trailers." 
  buttonText="Contact Us"  
/>
<Refurbishment/>

<HotSaleProducts/>
<AboutTruckTransportation/>
<ContactUs/>
<FooterTop/>
    </div>
    </>
  );
}

export default Home;