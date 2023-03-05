import styles from "./Info.module.css";

export default function Info() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h4>Marca</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing eli</p>
      </div>
      <div className={styles.card}>
        <h4>Confort</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing eli</p>
      </div>
      <div className={styles.card}>
        <h4>Suelas</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing eli</p>
      </div>
      <div className={styles.card}>
        <h4>Fabricación</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing eli</p>
      </div>
    </div>
  );
}
