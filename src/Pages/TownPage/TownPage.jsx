import React from "react";
import styles from "./TownPage.module.scss";
import Header from "../../Components/Header/Header";
import BigWhiteInp from "../../Components/BigWhiteInp/BigWhiteInp";
import Yachts from "../../Components/Yachts/Yachts";

const TownPage = () => {
  return (
    <>
      <Header />
      <div className={styles.search}>
        <div className="container">
          <div className={styles.search_i}>
            <h3 className={styles.title}>
              Арендуйте яхту и наслаждйтесь
              <br /> морским отдыхом.
            </h3>
            <h3 className={styles.sup}>
              Широкий выбор яхт для любых потребностей
            </h3>
            <div className={styles.inp_cos}>
              <BigWhiteInp place={"Укажите имя"} />
              <BigWhiteInp place={"Ваш телефон"} />
              <button className={styles.bigBtn}>Найти</button>
            </div>
          </div>
        </div>
      </div>
      <Yachts />
    </>
  );
};

export default TownPage;
