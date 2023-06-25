import React, { useEffect, useState } from "react";
import styles from "./TownPage.module.scss";
import Header from "../../Components/Header/Header";
import BigWhiteInp from "../../Components/BigWhiteInp/BigWhiteInp";
import Yachts from "../../Components/Yachts/Yachts";
import useQuery from "../../hooks/useQuery";
import api from "../../api";
import Footer from "../../Components/Footer/Footer";
import FAQ from "../../Components/FAQ/FAQ";
import Fail from "../Fail/Fail";

const TownPage = () => {
  const town = useQuery("town");

  const [fail, setFail] = useState(false);

  const [yachts, setYachts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const sendEmail = () => {
    api.sendMailWithOutYacht(name, phone).then(res => {
      if (res.data.status) {
        setPhone("");
        setName("");
        alert("Успешно");
      }
    });
  };

  useEffect(() => {
    api.AllYachts(town).then(data => {
      if (data.data.message) {
        setFail(true);
      }
      setYachts(data.data);
    });
  });

  return (
    <>
      {fail ? (
        <Fail />
      ) : (
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
                  <BigWhiteInp
                    place={"Укажите имя"}
                    value={name}
                    setTown={setName}
                  />
                  <BigWhiteInp
                    place={"Ваш телефон"}
                    value={phone}
                    setTown={setPhone}
                  />
                  <button className={styles.bigBtn} onClick={sendEmail}>
                    Забронировать
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Yachts yachts={yachts} />
          <FAQ town={town} />
          <Footer />
        </>
      )}
    </>
  );
};

export default TownPage;
