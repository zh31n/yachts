import React from "react";
import styles from "./YachtCard.module.scss";

const YachtCard = ({ img, model, name, des }) => {
  return (
    <div className={styles.main_container}>
      <div className={styles.image_container}>
        <img className={styles.img} src={img} />
      </div>
      <div className={styles.model_container}>
        <p className={styles.model_text}>{model}</p>
        <p className={styles.name_text}>{name}</p>
      </div>
      <div className={styles.des_container}>
        <p>{des}</p>
      </div>
      <div className={styles.price_container}>
        <p>27000 руб/час</p>
      </div>
    </div>
  );
};

export default YachtCard;
