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

  // Add product to wishlist
  const addToWishlist = (product) => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Prevent adding the same product again
    if (!savedWishlist.some(item => item.id === product.id)) {
      savedWishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(savedWishlist));
      alert("Product added to wishlist!");
    } else {
      alert("Product is already in your wishlist.");
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

        // Prepare product with images
        const productWithFixedImages = {
          ...data,
          images: [
            getCorrectImagePath(data.image1),
            getCorrectImagePath(data.image2),
            // getCorrectImagePath(data.image1), // Duplicate for testing
            // getCorrectImagePath(data.image2), // Duplicate for testing
            // getCorrectImagePath(data.image1), // Duplicate for testing
            // getCorrectImagePath(data.image2), // Duplicate for testing
          ].filter(Boolean), // Filter out null/undefined
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

          <button
            className={styles.addToWishlistButton}
            onClick={() => addToWishlist(product)}>
            Add to Wishlist
          </button>

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
