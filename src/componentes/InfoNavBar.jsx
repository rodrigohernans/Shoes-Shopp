import styles from "./InfoNavBar.module.css";

const infoDespliegue = ["Inicio", "Preguntas Frecuentes" , "Zapatos Dama" , "Zapatos Caballero", "Contacto"];

export default function InfoNavBar() {
  return (
    <div className={styles.container}>
      {infoDespliegue.map((y) => (
        <a href=""> {y} </a>
      ))}
    </div>
  );
}

