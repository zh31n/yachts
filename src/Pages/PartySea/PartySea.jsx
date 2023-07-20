import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import s from "./PartySea.module.scss";
import BigWhiteInp from "../../Components/BigWhiteInp/BigWhiteInp.jsx";
import { NavLink } from "react-router-dom";
import useQuery from "../../hooks/useQuery.js";
import api from "../../api/index.js";
import one from "../../assets/Rectangle 43.png";
import second from "../../assets/Rectangle 44.png";
import third from "../../assets/Rectangle 45.png";
import fourth from "../../assets/Rectangle 46.png";
import five from "../../assets/Rectangle 47.png";
import six from "../../assets/Rectangle 48.png";
import seven from "../../assets/Rectangle 49.png";
import Com from "./Com/Com.jsx";

const PartySea = props => {
  const town = useQuery("town");

  const [name, setName] = useState("");

  const data = [
    {
      tittle: "Корпоративные вечеринки",
      text: "Необычная обстановка яхты поможет создать уникальную атмосферу для командной работы, отличного отдыха и веселых развлечений",
      img: one,
    },
    {
      tittle: "Свадебные церемонии",
      text: "Сочи - прекрасное место для свадебной церемонии на яхте, где можно совместить церемонию, ужин и романтический круиз",
      img: second,
    },
    {
      tittle: "Дни рождения и юбилеи",
      text: "Проведите свой праздник в необычной обстановке, в компании друзей и близких",
      img: third,
    },
    {
      tittle: "Праздничные обеды и ужины",
      text: "Яхта подойдет для проведения любого праздничного ужина или обеда - от романтического ужина на закате до новогодней вечеринки",
      img: fourth,
    },
    {
      tittle: "Круизы и прогулки на яхте",
      text: "Если вам хочется просто отдохнуть и насладиться красивыми пейзажами, то прогулка на яхте старет отличным выбором",
      img: five,
    },
    {
      tittle: "Мальчишники и девичники",
      text: "Проведите свой последний вечер свободы на яхте! Незабываемая атмосфера, романтический круиз, вкусные коктели и музыка создадут незабываемое настроение для вас и ваших друзей",
      img: six,
    },
    {
      tittle: "Предложение руки и сердца",
      text: "Мы с радостью поможем организовать романтическое путешествие на яхт с возможностью сделать предложение. Наша команда сделает все возможное, чтобы ваше предложение стало незабываемым и романтческим и Ваша любимая сказала “Да”",
      img: seven,
    },
  ];

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

  return (
    <>
      <Header town={town} />
      <div className={s.search}>
        <div className="container">
          <div className={s.search_i}>
            <h3 className={s.title}>
              Организация праздника в море в городе{" "}
              <span className="cityUp">{town}</span>
            </h3>
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
          <div className={s.garant_i}>
            <h3 className={s.title}>Мероприятия, которые можно организовать</h3>
            <div className={s.container}>
              {data.map(function (el) {
                return <Com el={el} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PartySea;
