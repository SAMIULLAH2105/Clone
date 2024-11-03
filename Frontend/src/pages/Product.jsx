import React from 'react';
import { useOutletContext } from 'react-router-dom';
import CardComponent from '../components/CardComponent';
import FooterTop from '../components/FooterTop';

function ProductPage() {
  const { filteredProducts } = useOutletContext(); // Get filtered products from context

  return (
    <>
      <div className="product" style={{ textAlign: "center" }}>
        <h1
          style={{
            minHeight: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "50px",
            fontFamily: "'Playfair Display', serif",
            marginBottom: "0",
            marginTop:"100px",
            backgroundColor: "#e7eaec",
          }}
        >
          Products
        </h1>
      </div>
      <CardComponent products={filteredProducts} /> {/* Display the filtered or default product array */}
      <FooterTop />
    </>
  );
}

export default ProductPage;
