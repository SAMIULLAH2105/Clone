
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/CardComponent.module.css';


const Product = ({products}) => {
  return (
    <div className={styles.productList}>
      {products.map(product => (
        <div key={product.id} className={styles.card}>
          <Link to={`/product/${product.id}`}>
            <div className={styles.imageWrapper}>
              <img src={product.image1} alt={product.name} className={`${styles.cardImage} ${styles.normalImage}`} />
              <img src={product.image2} alt={product.name} className={`${styles.cardImage} ${styles.hoverImage}`} />
            </div>
            <div className={styles.description}>
              <h3>{product.name}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Product;










