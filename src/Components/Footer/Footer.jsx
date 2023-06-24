import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.form_container}>
        <form>
          <label className={styles.text}>
            Свяжитесь и получите консультацию!
          </label>
          <div className={styles.label_container}>
            <label>Ваш номер телефона</label>
            <input placeholder="Ваш номер" />
          </div>
          <div className={styles.label_container}>
            <label>Ваше имя</label>
            <input placeholder="Ваше имя" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;
