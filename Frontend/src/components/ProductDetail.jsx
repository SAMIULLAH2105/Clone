import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from './ProductData';
import styles from '../styles/ProductDetail.module.css'
import FooterTop from './FooterTop';
import imagesrc1 from "../assets/products/payment.png"
const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === Number(productId));

  if (!product) {
    return <div className={styles.notFound}>Product not found!</div>;
  }

  return (
    <div className={styles.container}>
      
      <div className={styles.productDetails}>

        <div className={styles.images}>
          <img src={product.image1} alt={product.name} className={styles.mainImage} />
          {/* <img src={product.image2} alt={`${product.name} hover`} className={styles.hoverImage} /> */}
        </div>

        <div className={styles.info}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div className={styles.freeShipping}>Free shipping on orders over $50!</div>
          <ul className={styles.features}>
            <li>Satisfaction Guaranteed</li>
            <li>No Hassle Refunds</li>
            <li>Secure Payments</li>
          </ul>
          <img src={imagesrc1} alt="" className={styles.payImg}/>
        </div>

      </div>
      <FooterTop/>
    </div>
    
  );
};

export default ProductDetail;
