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
  const [phone, setPhone] = useState("+");

  const [vis, setVis] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    api.getYachtInfo(id).then(res => {
      if (res.data.message) {
        setLoader(false);
        setFail(true);
      } else {
        setYacht(res.data);
        console.log(res.data);
        setLoader(false);
      }
    });
  }, []);

  const sendEmail = () => {
    if (name) {
      api.sendMailWithYacht(name, phone, yacht.spec.name).then(() => {
        setName("");
        setPhone("");
      });
    }
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
                  {yacht.image[0].map(function (el, index) {
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
                  <button onClick={sendEmail}>Забронировать</button>
                </div>
              </div>
              <div className={s.description_container}>
                <p className={s.text}>Описание яхты</p>
                <p className={s.des_text}>{yacht.description}</p>
              </div>
              <div className={s.info_container}>
                <p className={s.main_cont_text}>Информация о яхте</p>
                <div className={s.spec_info}>
                  <div className={s.container_info}>
                    <div>
                      <p>Модель</p>
                      <p>{yacht.spec.model}</p>
                    </div>
                    <div>
                      <p>Название</p>
                      <p>{yacht.spec.name}</p>
                    </div>
                    <div>
                      <p>Класс</p>
                      <p>{yacht.spec.class}</p>
                    </div>
                    <div>
                      <p>Производитель</p>
                      <p>{yacht.spec.manufacturer}</p>
                    </div>
                    <div>
                      <p>Верфь</p>
                      <p>{yacht.spec.shipyard}</p>
                    </div>
                    <div>
                      <p>Год постройка</p>
                      <p>{yacht.spec.year}</p>
                    </div>
                  </div>
                  <div className={s.container_info}>
                    <div>
                      <p>Двигатель</p>
                      <p>{yacht.spec.engine}</p>
                    </div>
                    <div>
                      <p>Длина</p>
                      <p>{yacht.spec.width}</p>
                    </div>
                    <div>
                      <p>Ширина</p>
                      <p>{yacht.spec.length}</p>
                    </div>
                    <div>
                      <p>Осадка</p>
                      <p>{yacht.spec.draught}</p>
                    </div>
                    <div>
                      <p>Скорость</p>
                      <p>{yacht.spec.spead}</p>
                    </div>
                    <div>
                      <p>Количество кают</p>
                      <p>{yacht.spec.number_of_cabins}</p>
                    </div>
                    <div>
                      <p>Пассажировместимость</p>
                      <p>{yacht.spec.passenger_capacity}</p>
                    </div>
                  </div>
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
