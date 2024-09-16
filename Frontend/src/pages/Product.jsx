import React from 'react';
import CardComponent from '../components/CardComponent';
import FooterTop from '../components/FooterTop';

function Product() {
  return (
    <>
        <div className="product" style={{textAlign:"center"}}>
      <h1>Our Products</h1>
     
    </div>
    <CardComponent/>
    <FooterTop/>
    </>

  );
}

export default Product;
