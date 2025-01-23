import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "../styles/ProductDetail.module.css";
import FooterTop from "./FooterTop";
import paymentImage from "../assets/products/payment.png";
import ProductImage from "./ProductImages";

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

  const addToWishlist = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/products/${product.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            isFavourite: true,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add to wishlisr");
      }

      const updatedProduct = await response.json();
      alert("added to wishlist");
      return updatedProduct;
    } catch (error) {
      console.log(`http://localhost:3000/products/${product.id}`);
      alert("Error adding to wishlist");
    }
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
          images: [
            getCorrectImagePath(data.image1),
            getCorrectImagePath(data.image2),
          ].filter(Boolean),
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
        navigate(-1);
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
        <ProductImage images={product.images} />

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

          <div className={styles.adminControls}>
            <button
              className={styles.addToWishlistButton}
              onClick={addToWishlist}
            >
              Add to Wishlist
            </button>
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
