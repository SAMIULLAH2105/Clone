import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/ProductDetail.module.css";
import FooterTop from "./FooterTop";
import paymentImage from "../assets/products/payment.png";

const ProductDetail = () => {
  const { slug } = useParams(); // Get slug from URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false); // State to track if it's an admin page

  useEffect(() => {
    // Check if the URL contains '/admin'
    if (window.location.pathname.includes("/admin")) {
      setIsAdmin(true); // Set isAdmin to true if it's an admin URL
    }

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

  const deleteProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/products/${product.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert("Product deleted successfully");
        // Optionally, redirect or update the UI after deletion
      } else {
        alert("Failed to delete product");
      }
    } catch (err) {
      alert("Error deleting product");
    }
  };

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
          <img src={paymentImage} alt="Payment" />
          <div>
            {isAdmin && (
              <button className={styles.deleteButton} onClick={deleteProduct}>
                Delete Product
              </button>
            )}
          </div>
        </div>
      </div>
      <FooterTop />
    </div>
  );
};

export default ProductDetail;
