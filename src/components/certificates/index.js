import React from "react";
import styles from "./style.module.css";

const Certificates = ({ logo, name }) => {
  return (
    <div className={styles.card}>
      <div className={styles.logo}>{logo}</div>
      <div className={styles.name}>{name}</div>
    </div>
  );
};

export default Certificates;
