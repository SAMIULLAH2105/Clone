import React from "react";
import imageSrc1 from "../assets/Refurbishment-first-pic.jpg";
import imageSrc2 from "../assets/Refurbishment-second-pic.jpg";
import styles from "../styles/Refurbishment.module.css";

const Refurbishment = () => (
  <>
    <div className={styles.main}>
      <img
        src={imageSrc1}
        alt="Descriptive text about the image"
        className={styles.img1}
      />
      <img
        src={imageSrc2}
        alt="Descriptive text about the image"
        className={styles.img2}
      />
      <div className={styles.container}>
        <h3>Professional truck refurbishment factory</h3>
        We strictly control product quality to ensure that every truck and
        trailer meets international standards and the highest industry
        requirements before delivery to customers.
      </div>
    </div>
  </>
);

export default Refurbishment;
