import "react-multi-carousel/lib/styles.css";

import React, { useEffect, useState } from "react";

import Carrusel from "../componentes/Carousel";
import Nav from "../layout/NavBar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <Nav />
			<div>
				{/* <Carrusel /> */}
			</div>
    </div>
  );
};

export default Home;
