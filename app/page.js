import Terminal from "../components/Terminal";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Terminal />  

    </div>
  );
}

// <span className={styles.help}>(type "help" for a list of commands)</span>