import "react-multi-carousel/lib/styles.css";

import React, { useEffect, useState } from "react";

import Carrusel from "../componentes/Carousel";
import Info from "../componentes/Info";
import Nav from "../layout/NavBar";
import ZapatoDeCaballero from "../componentes/ZapatosDeCaballero";
import ZapatosDeMujer from "../componentes/ZapatosDeDama";
import styles from "./Home.module.css";

const Home = () => {
 

  return (
    <div className={styles.container}>
      <Nav />
      <h2>Explora los mejores zapatos</h2>
      <div>
        <Carrusel />
      </div>
      <Info />
      <h2 className={styles.mujer}>Zapatos Mujer</h2>
      <ZapatosDeMujer />
      <h2 className={styles.mujer}>Zapatos Caballero</h2>
      <ZapatoDeCaballero />
    </div>
  );
};

export default Home;
