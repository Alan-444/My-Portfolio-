import React from "react";
import styles from "./style.module.css";

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className={`${styles.section_heading}`}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
