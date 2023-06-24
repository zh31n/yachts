import React from "react";
import styles from "./YachtCard.module.scss";

const YachtCard = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.image_container}>
        <img
          className={styles.img}
          src="http://45.12.73.221:80/file?filename=1687436595891-postImg.png"
        />
      </div>
      <div className={styles.model_container}>
        <p className={styles.model_text}>Моторная лодка</p>
        <p className={styles.name_text}>Azimut</p>
      </div>
      <div className={styles.des_container}>
        <p>
          Лодка оснащена новейшими технологиями. 3 Спальных команты. 2 Кухни.
          Удобнейший нос Лодка оснащена новейшими технологиями. 3 Спальных
          команты. 2 Кухни. Удобнейший нос
        </p>
      </div>
      <div className={styles.price_container}>
        <p>27000 руб/час</p>
      </div>
    </div>
  );
};

export default YachtCard;
