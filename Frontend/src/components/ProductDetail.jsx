import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/ProductDetail.module.css";
import FooterTop from "./FooterTop";
import paymentImage from "../assets/products/payment.png";
const ProductDetail = () => {
  const { slug } = useParams(); // Get slug from URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/${slug}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        console.log(data); // Log the fetched data
        setProduct(data); // Set the product state
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProduct();
  }, [slug]);

  if (error) {
    return <div className={styles.notFound}>{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.productDetails}>
        <div className={styles.images}>
          <img
            src={product.image1}
            alt={product.name}
            className={styles.mainImage}
          />
        </div>
        <div className={styles.info}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div className={styles.freeShipping}>
            Free shipping on orders over $50!
          </div>
          <ul className={styles.features}>
            <li>Satisfaction Guaranteed</li>
            <li>No Hassle Refunds</li>
            <li>Secure Payments</li>
          </ul>
          <img src={paymentImage} alt="Payment" />;
        </div>
      </div>
      <FooterTop />
    </div>
  );
};

export default ProductDetail;
