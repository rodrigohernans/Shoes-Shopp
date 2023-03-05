import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";
import styles from "./ZapatoDeCaballero.module.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function ZapatoDeCaballero() {
  const img = [
    "https://tangoticos.com/wp-content/uploads/2020/02/img0-5df-1435x1080.jpg",
    "https://tangoticos.com/wp-content/uploads/2020/02/img0-19-1435x1080.jpg",
    "https://tangoticos.com/wp-content/uploads/2020/02/img0-5df-1435x1080.jpg",
    "https://tangoticos.com/wp-content/uploads/2020/02/img0-5df-1435x1080.jpg",
    "https://tangoticos.com/wp-content/uploads/2020/02/img0-5df-1435x1080.jpg",
    "https://tangoticos.com/wp-content/uploads/2020/02/img0-5df-1435x1080.jpg",
  ];

  return (
    <Carousel responsive={responsive} className={styles.container}
    swipeable={false}
    draggable={false}
    showDots={false}
    ssr={true} 
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={2500}
    keyBoardControl={true}
    customTransition="all .20"
    transitionDuration={1000}
    containerClass="carousel-container"
    removeArrowOnDeviceType={false}
    dotListClass="custom-dot-list-style"
    >
      {img.map((image, index) => (
        <div className={styles.card}>
          <div key={index} className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <img src={image} alt="" />
                <p className={styles.title}>Más información</p>
              </div>
              <div className={styles.flipCardBack}>
                <p className={styles.otherTitle}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nobis odit repudiandae vitae
                </p>
                <h4>$2500</h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
