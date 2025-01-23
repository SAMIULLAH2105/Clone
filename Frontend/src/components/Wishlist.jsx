import React, { useState, useEffect } from "react";
import styles from "../styles/Wishlist.module.css";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await fetch("http://localhost:3000/wishlist");

        if (!response.ok) {
          throw new Error("Failed to fetch wishlist items.");
        }

        const data = await response.json();
        setWishlistItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, [wishlistItems]);

  const removeFromWishlist = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/products/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            isFavourite: false,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to remove to wishlisr");
      }

      const updatedProduct = await response.json();
      alert("removed from wishlist");
      return updatedProduct;
    } catch (error) {
      alert("Error removing from wishlist");
    }
  };

  if (wishlistItems.length === 0) {
    return (
      <div className={styles.emptyWishlistMessage}>
        Your wishlistItems is empty.
      </div>
    );
  }

  return (
    <div className={styles.Container}>
      <h1>Your Wishlist</h1>
      <div className={styles.wishlistItems}>
        {wishlistItems.map((product) => (
          <div key={product.id} className={styles.wishlistItem}>
            <img
              src={product.image1}
              alt={product.name}
              className={styles.productImage}
            />
            <div className={styles.productDetails}>
              <h3>{product.name}</h3>
            </div>

            <button
              className={styles.removeButton}
              onClick={() => removeFromWishlist(product.id)}
            >
              Remove from Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
