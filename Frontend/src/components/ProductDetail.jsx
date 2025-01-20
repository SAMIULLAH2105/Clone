import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "../styles/ProductDetail.module.css";
import FooterTop from "./FooterTop";
import paymentImage from "../assets/products/payment.png";

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate(); // Initialize navigate hook
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const getCorrectImagePath = (relativePath) => {
    if (!relativePath) return "";
    let path = relativePath.replace("../src/", "");
    return `/src/assets/${path.replace("assets/", "")}`;
  };

  useEffect(() => {
    if (window.location.pathname.includes("/admin")) {
      setIsAdmin(true);
    }

    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/${slug}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        const productWithFixedImages = {
          ...data,
          image1: getCorrectImagePath(data.image1),
          image2: data.image2 ? getCorrectImagePath(data.image2) : null,
          image3: data.image3 ? getCorrectImagePath(data.image3) : null,
        };
        setProduct(productWithFixedImages);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProduct();
  }, [slug]);

  const deleteProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/admin/products/${product.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert("Product deleted successfully");
        navigate(-1); // Go back to the previous page
      } else {
        alert("Failed to delete product");
      }
    } catch (err) {
      alert("Error deleting product");
      console.error("Delete error:", err);
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
          {product.image1 && (
            <img
              src={product.image1}
              alt={product.name}
              className={styles.mainImage}
              onError={(e) => {
                console.error("Image failed to load:", e.target.src);
                e.target.src = "/placeholder.png";
              }}
            />
          )}
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
          {isAdmin && (
            <div className={styles.adminControls}>
              <button className={styles.deleteButton} onClick={deleteProduct}>
                Delete Product
              </button>
            </div>
          )}
        </div>
      </div>
      <FooterTop />
    </div>
  );
};

export default ProductDetail;
