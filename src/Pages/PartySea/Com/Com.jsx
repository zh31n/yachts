import React from "react";
import styles from "./Com.module.scss";

const Com = ({ el }) => {
  return (
    <div className={styles.container}>
      <img src={el.img} className={styles.iamge} />
      <p className={styles.main_text}>{el.tittle}</p>
      <p className={styles.text}>{el.text}</p>
    </div>
  );
};

export default Com;
