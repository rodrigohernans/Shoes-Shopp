import styles from "./InfoNavBar.module.css";

const InfoNavBar = ({ scrollToAbout }) => {
  return (
    <div className={styles.container}>
      <a href="#">Inicio</a>
      <a href="#">Preguntas Frecuentes</a>
      <a href="#" onClick={scrollToAbout}>
        Zapatos de Mujer
      </a>
      <a href="#">Zapato Caballero</a>
      <a href="#">Contacto</a>
      <a href="#">Contacto</a>
      <a href="#">Contacto</a>
    </div>
  );
};

export default InfoNavBar;

