import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/Slider.module.css";
import Image from "./Image";

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

const brands = [
  { id: 1, logo: "src/assets/brandLogos/dfm.jpeg", alt: "Brand 1" },
  { id: 2, logo: "src/assets/brandLogos/hongyan.jpeg", alt: "Brand 2" },
  { id: 3, logo: "src/assets/brandLogos/volvo.png", alt: "Brand 3" },
  { id: 4, logo: "src/assets/brandLogos/shacman.png", alt: "Brand 4" },
  { id: 5, logo: "src/assets/brandLogos/sinotruck.jpeg", alt: "Brand 5" },
  { id: 6, logo: "src/assets/brandLogos/one.jpeg", alt: "Brand 6" },
  { id: 7, logo: "src/assets/brandLogos/mercedes.jpeg", alt: "Brand 7" },
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
