import React, { useState, useEffect } from "react";
import styles from "../styles/Wishlist.module.css";

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    // Fetch wishlist data from localStorage
    useEffect(() => {
        const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(savedWishlist);
    }, []);

    const removeFromWishlist = (productId) => {
        const updatedWishlist = wishlist.filter(item => item.id !== productId);

        // Update the state and localStorage
        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    };

    if (wishlist.length === 0) {
        return <div className={styles.emptyWishlistMessage}>Your wishlist is empty.</div>;
    }

    return (
        <div className={styles.Container}>
            <h1>Your Wishlist</h1>
            <div className={styles.wishlistItems}>
                {wishlist.map((product) => (
                    <div key={product.id} className={styles.wishlistItem}>
                        <img
                            src={product.images[0]}
                            alt={product.name}
                            className={styles.productImage}
                        />
                        <div className={styles.productDetails}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                        </div>

                        <button
                            className={styles.removeButton}
                            onClick={() => removeFromWishlist(product.id)}>
                            Remove from Wishlist
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;