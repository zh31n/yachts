import React, { useEffect, useState } from "react";
import s from "./Yacht.module.scss";
import Header from "../../Components/Header/Header.jsx";
import y from "../../assets/Y.jpg";
import Loader from "../../Components/Loader/Loader";
import api from "../../api";
import { useParams } from "react-router-dom";
import Fail from "../Fail/Fail";
import Modal from "../../Components/Modal/Modal";
import Footer from "../../Components/Footer/Footer";
import Carucel from "./Carucel/Carucel";

const Yacht = props => {
  const [yacht, setYacht] = useState({});
  const [loader, setLoader] = useState(true);
  const [fail, setFail] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [vis, setVis] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    api.getYachtInfo(id).then(res => {
      if (res.data.message) {
        setLoader(false);
        setFail(true);
      } else {
        setYacht(res.data);
        setLoader(false);
      }
    });
  }, []);

  const sendEmail = () => {
    api.sendMailWithYacht(name, phone, yacht.spec.name).then(() => {
      setName("");
      setPhone("");
    });
  };

  if (loader) {
    return <Loader />;
  }

  return (
    <>
      {fail ? (
        <Fail />
      ) : (
        <>
          {vis && (
            <Modal
              setVis={setVis}
              name={name}
              phone={phone}
              setName={setName}
              setPhone={setPhone}
              yacht={yacht.spec.name + ` ` + yacht.spec.model}
            />
          )}
          <Header town={yacht.town} />
          <div className={s.container}>
            <div className={s.main_container}>
              <p className={s.text}>Информация о яхте</p>
              {/* <div className={s.btn} onClick={sendEmail}>
                Забронировать
              </div> */}
              <div className={s.photo_container}>
                <Carucel>
                  {yacht.image.map(function (el, index) {
                    return (
                      <img
                        src={el}
                        alt={"фото яхты"}
                        className={s.image}
                        key={index}
                      />
                    );
                  })}
                </Carucel>
                <div className={s.form}>
                  <p className={s.form_text}>Запоните поля ниже</p>
                  <p className={s.main_text}>Оставить заявку</p>
                  <input
                    className={s.input}
                    value={name}
                    onChange={e => {
                      setName(e.target.value);
                    }}
                    placeholder="Имя*"
                  />
                  <input
                    className={s.input}
                    value={phone}
                    onChange={e => {
                      setPhone(e.target.value);
                    }}
                    placeholder="Номер телефона*"
                  />
                  <p className={s.price}>{yacht.price} руб/час</p>
                  <button>Забронировать</button>
                </div>
              </div>
              <div className={s.description_container}>
                <p className={s.text}>Описание яхты</p>
                <p className={s.des_text}>{yacht.description}</p>
              </div>
              <div className={s.info_container}>
                <p className={s.main_cont_text}>Информация о яхте</p>
                <div className={s.spec_info}>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Yacht;
