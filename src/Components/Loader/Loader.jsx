import React from "react";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.div}>
      <span className={styles.span}>↓</span>
      <span className={styles.span} style={{ animationDelay: "0.1s" }}>
        ↓
      </span>
      <span className={styles.span} style={{ animationDelay: "0.3s" }}>
        ↓
      </span>
      <span className={styles.span} style={{ animationDelay: "0.4s" }}>
        ↓
      </span>
      <span className={styles.span} style={{ animationDelay: "0.5s" }}>
        ↓
      </span>
    </div>
  );
};

export default Loader;
