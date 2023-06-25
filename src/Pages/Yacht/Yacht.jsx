import React, { useEffect, useState } from "react";
import s from "./Yacht.module.scss";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import api from "../../api";
import Loader from "../../Components/Loader/Loader";

const Yacht = props => {
  const { id } = useParams();

  const [loader, setLoader] = useState(true);
  const [fail, setFail] = useState(false);

  const [yacht, setYacht] = useState({});

  useEffect(() => {
    api.getYachtsInfo(id).then(res => {
      setYacht(res.data);
      setLoader(false);
    });
  });

  if (loader) {
    return <Loader />;
  }

  return (
    <>
      <Header town={yacht.town} />
      <div className={"container"}>
        <div className={s.titleY}>Информация о яхте</div>
        <div className={s.cardY}>
          <div className={s.cardI}>
            <div className={s.title}>Информамция о яхте</div>
            <div className={s.inf}>
              <span>Название яхты</span>
              <span>{yacht.spec.name}</span>
            </div>
            <div className={s.inf}>
              <span>Пассажиров</span>
              <span>{yacht.spec.passenger_capacity}</span>
            </div>
            <div className={s.inf}>
              <span>Длина</span>
              <span>{yacht.spec.length}m</span>
            </div>
            <p className={s.desc}>{yacht.description}</p>
            <div className={s.price}>{yacht.price} руб/час</div>
            <div className={s.btn}>Забранировать</div>
          </div>
          <img
            src={yacht.image}
            alt={"фото яхты"}
            style={{ width: "670px", height: "645px", borderRadius: "20px" }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Yacht;
