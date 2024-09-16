// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import styles from '../styles/CardComponent.module.css';

// const Product = () => {
//   const products = [
//     { id: 1, name: 'Product 1', image1: '/src/assets/HotSaleOne.jpg', image2: 'src/assets/HotSaleTwo.jpg' },
//     { id: 2, name: 'Product 2', image1: '/path-to-image-2.jpg', image2: '/path-to-hover-image-2.jpg' },
//     { id: 3, name: 'Product 3', image1: '/path-to-image-3.jpg', image2: '/path-to-hover-image-3.jpg' },
//     // Add more products as needed
//   ];

//   return (
//     <div className={styles.productList}>
//       {products.map(product => (
//         <div key={product.id} className={styles.card}>
//           <Link to={`/product/${product.id}`}>
//             <div className={styles.imageWrapper}>
//               <img src={product.image1} alt={product.name} className={`${styles.cardImage} ${styles.normalImage}`} />
//               <img src={product.image2} alt={product.name} className={`${styles.cardImage} ${styles.hoverImage}`} />
//             </div>
//             <div className={styles.description}>
//               <h3>{product.name}</h3>
//             </div>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Product;
// src/components/Product.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/CardComponent.module.css';
import { products } from './ProductData'; // Import the products array

const Product = () => {
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

