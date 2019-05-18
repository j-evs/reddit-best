import React from "react";

import styles from "./Error.module.css";

const Error = () => (
  <div className={styles.error} data-testid="error">
    Ooops... Something went wrong. Please try again later.
  </div>
);

export default Error;
