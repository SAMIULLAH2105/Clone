import { useState } from "react";
import styles from "../styles/ProductImages.module.css";

const ProductImages = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(images[0] || "");

  return (
    <div className={styles.Container}>
      {/* Main Image */}
      {selectedImage && (
        <img
          src={selectedImage}
          alt="Selected"
          className={styles.mainImage}
          onError={(e) => {
            console.error("Image failed to load:", e.target.src);
            e.target.src = "/placeholder.png";
          }}
        />
      )}

      {/* Thumbnails */}
      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`${styles.thumbnail} ${
              selectedImage === image ? styles.activeThumbnail : styles.inactiveThumbnail
            }`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
