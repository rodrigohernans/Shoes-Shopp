import "bootstrap/dist/css/bootstrap.min.css";

import Carousel from "react-bootstrap/Carousel";
import styles from "./Carousel.module.css";

function Carrusel() {
  return (
    <div id="carrousel" className={styles.container}>
      <Carousel variant="dark" wrap="true">
        <Carousel.Item className={styles.containerImg}>
          <img
            className={styles.image}
            src="https://tangoticos.com/wp-content/uploads/2020/02/img0-5df-1435x1080.jpg"
            alt="First slide"
          />
         {/*  <Carousel.Caption>
            <h3>Titulo</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item className={styles.containerImg}>
          <img
            className={styles.image}
            src="https://tangoticos.com/wp-content/uploads/2020/02/img0-19-1435x1080.jpg"
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h3>Titulo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item className={styles.containerImg}>
          <img
            className={styles.image}
            src="https://tangoticos.com/wp-content/uploads/2020/02/img0-5df-1435x1080.jpg"
            alt="Third slide"
          />

         {/*  <Carousel.Caption>
            <h3>Titulo</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrusel;
