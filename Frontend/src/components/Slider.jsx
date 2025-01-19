import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/Slider.module.css";

import dfmLogo from "../assets/brandLogos/dfm.jpeg";
import hongyanLogo from "../assets/brandLogos/hongyan.jpeg";
import volvoLogo from "../assets/brandLogos/volvo.png";
import shacmanLogo from "../assets/brandLogos/shacman.png";
import sinotruckLogo from "../assets/brandLogos/sinotruck.jpeg";
import oneLogo from "../assets/brandLogos/one.jpeg";
import mercedesLogo from "../assets/brandLogos/mercedes.jpeg";

// Custom Next Arrow Component
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={`${styles.customArrow} ${styles.customNext}`}
      onClick={onClick}
    >
      <span>&#9654;</span> {/* Right Arrow */}
    </div>
  );
};

// Custom Previous Arrow Component
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={`${styles.customArrow} ${styles.customPrev}`}
      onClick={onClick}
    >
      <span>&#9664;</span> {/* Left Arrow */}
    </div>
  );
};

export const brands = [
  { id: 1, logo: dfmLogo, alt: "Brand 1", name: "DFM" },
  { id: 2, logo: hongyanLogo, alt: "Brand 2", name: "Hongyan" },
  { id: 3, logo: volvoLogo, alt: "Brand 3", name: "Volvo" },
  { id: 4, logo: shacmanLogo, alt: "Brand 4", name: "Shacman" },
  { id: 5, logo: sinotruckLogo, alt: "Brand 5", name: "Sinotruck" },
  { id: 6, logo: oneLogo, alt: "Brand 6", name: "One" },
  { id: 7, logo: mercedesLogo, alt: "Brand 7", name: "Mercedes" },
];

const BrandSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 logos at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 logo at a time on mobile
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {brands.map((brand) => (
          <div key={brand.id} className={styles.slide}>
            <img
              src={brand.logo}
              alt={brand.alt}
              className={styles.sliderImage}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandSlider;
