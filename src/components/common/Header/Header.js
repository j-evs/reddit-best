import React from "react";
import styles from "./Header.module.css";
import cx from "classnames";

const Header = ({ title, label, className }) => (
  <header className={cx(styles.header, className)}>
    <h1 className={styles.headerMain}>{title}</h1>
    <h2 className={styles.headerLabel}>{label}</h2>
  </header>
);

export default Header;
