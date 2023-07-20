import React, { useEffect, useState } from "react";
import styles from "./About.module.scss";
import Header from "../../Components/Header/Header";
import useQuery from "../../hooks/useQuery";
import api from "../../api";
import Footer from "../../Components/Footer/Footer";
import BigWhiteInp from "../../Components/BigWhiteInp/BigWhiteInp";

const About = () => {
  const town = useQuery("town");

  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+");

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
    api.getAbout(town).then(data => {
      console.log(data.data);
      data.data.text ? setText(data.data.text) : setText(data.data.message);
    });
  }, []);

  return (
    <>
      <Header town={town} />
      <div className={styles.main_photo}>
        <div className="container">
          <div className={styles.search_i}>
            <h3 className={styles.title}>О нас</h3>
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
      <div className={styles.main_container}>
        <p className={styles.main_text}>О нас</p>
        <div className={styles.text_container}>
          <p>{text}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
