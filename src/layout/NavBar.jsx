import React, { useState } from "react";

import InfoNavBar from "../componentes/InfoNavBar";
import styles from "./NavBar.module.css";

export default function Nav() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <input
          id="check"
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="check" className={styles.menuButton}>
          <span className={styles.top}></span>
          <span className={styles.mid}></span>
          <span className={styles.bot}></span>
        </label>
      </div>
      <div className={styles.info} >
      {checked ? <InfoNavBar /> : null}
      </div>
    </div>
  );
}
