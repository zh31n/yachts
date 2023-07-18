import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import s from "./Catering.module.scss";
import BigWhiteInp from "../../Components/BigWhiteInp/BigWhiteInp.jsx";
import { NavLink } from "react-router-dom";
import useQuery from "../../hooks/useQuery.js";
import api from "../../api/index.js";
import Carucel from "./Carucel/Carucel.jsx";

const Catering = () => {
  const town = useQuery("town");

  const [info, setInfo] = useState([]);
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
    api.getCatering(town).then(res => {
      setInfo(res.data.pages);
    });
  }, []);

  return (
    <>
      <Header town={town} />
      <div className={s.search}>
        <div className="container">
          <div className={s.search_i}>
            <h3 className={s.title}>Кейтеринг в городе <span className='cityUp'>{town}</span></h3>
            <div className={s.inp_cos}>
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
              <button className={s.bigBtn} onClick={sendEmail}>
                Забронировать
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={s.garant}>
        <div className="container">
          {info.map(function (el, index) {
            return (
              <div className={s.garant_i} key={index}>
                <div style={{ width: "80%", textAlign: "center" }}>
                  <h3 className={s.title}>{el.title}</h3>
                </div>
                <Carucel>
                  {el.image.map(function (el) {
                    console.log(el.urlfile);
                    return <img src={el.urlfile} />;
                  })}
                </Carucel>
                <p
                  style={{
                    fontSize: "25px",
                    marginTop: "40px",
                    marginBottom: "20px",
                  }}
                >
                  {el.des}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Catering;
