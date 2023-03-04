import styles from "./InfoNavBar.module.css";

const infoDespliegue = ["Store", "Man", "Women"];

export default function InfoNavBar() {
  return (
    <div className={styles.container}>
      {infoDespliegue.map((y) => (
        <a href=""> {y} </a>
      ))}
    </div>
  );
}

