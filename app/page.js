import Terminal from "../components/Terminal";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.fakeMenu}>
        <div className={styles.Toolbar__buttons}>
        <button className={styles.Toolbar__button}>&#10005;</button>
        <button className={styles.Toolbar__button}>&#9472;</button>
        <button className={styles.Toolbar__button}>&#9723;</button>
      </div>
    </div>
    <Terminal />
    </div>
  );
}

// <span className={styles.help}>(type "help" for a list of commands)</span>