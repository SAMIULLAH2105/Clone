import React from "react";
import imageSrc1 from "../assets/HotSaleOne.jpg";
import imageSrc2 from "../assets/HotSaleTwo.jpg";
import imageSrc3 from "../assets/HotSaleThree.png";
import styles from "../styles/HotSale.module.css";


const HotSaleProducts = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Hot Sale Products</h2>
      <div className={styles.products}>
        <div className={styles.product}>
          <img src={imageSrc1} alt="HOWO 6x4 Dump Truck" />
          <p className={styles.caption}>HOWO 6X4 DUMP TRUCK</p>
        </div>
        <div className={styles.product}>
          <img src={imageSrc2} alt="HOWO 8x4 Dump Truck" />
          <p className={styles.caption}>HOWO 8X4 DUMP TRUCK</p>
        </div>
        <div className={styles.product}>
          <img src={imageSrc3} alt="HOWO 8x4 Chassis Truck" />
          <p className={styles.caption}>HOWO 8X4 CHASSIS TRUCK</p>
        </div>
      </div>
    </div>
  );
};

export default HotSaleProducts;

