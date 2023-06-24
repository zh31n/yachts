import React, { useEffect, useState } from "react";
import styles from "./TownPage.module.scss";
import Header from "../../Components/Header/Header";
import BigWhiteInp from "../../Components/BigWhiteInp/BigWhiteInp";
import Yachts from "../../Components/Yachts/Yachts";
import useQuery from "../../hooks/useQuery";
import api from "../../api";
import Footer from "../../Components/Footer/Footer";
import FAQ from "../../Components/FAQ/FAQ";

const TownPage = () => {
  const town = useQuery("town");

  const [yachts, setYachts] = useState([]);

  useEffect(() => {
    api.AllYachts(town).then(data => {
      setYachts(data.data);
    });
  });

  return (
    <>
      <Header town={town} />
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
              <button
                className={styles.bigBtn}
                onClick={() => {
                  alert(town);
                }}
              >
                Найти
              </button>
            </div>
          </div>
        </div>
      </div>
      <Yachts yachts={yachts} />
      <FAQ />
      <Footer />
    </>
  );
};

export default TownPage;
