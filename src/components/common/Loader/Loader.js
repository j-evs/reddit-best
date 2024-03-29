import React from "react";

import styles from "./Loader.module.css";

const Loader = () => (
  <div className={styles.loader}>
    <svg viewBox="25 25 50 50">
      <circle cx="50" cy="50" r="20" />
    </svg>
  </div>
);

export default Loader;
