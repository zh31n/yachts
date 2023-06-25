import React, { useEffect, useState } from "react";
import s from "./Yacht.module.scss";
import Header from "../../Components/Header/Header.jsx";
import y from "../../assets/Y.jpg";
import Loader from "../../Components/Loader/Loader";
import api from "../../api";
import { useParams } from "react-router-dom";
import Fail from "../Fail/Fail";

const Yacht = props => {
  const [yacht, setYacht] = useState({});
  const [loader, setLoader] = useState(true);
  const [fail, setFail] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    api.getYachtInfo(id).then(res => {
      console.log(res.data);
      if (res.data.message) {
        setLoader(false);
        setFail(true);
      } else {
        setYacht(res.data);
        setLoader(false);
      }
    });
  }, []);

  if (loader) {
    return <Loader />;
  }

  return (
    <>
      {fail ? (
        <Fail />
      ) : (
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
                  <span>{yacht.spec.lenght}m</span>
                </div>
                <p className={s.desc}>{yacht.description}</p>
                <div className={s.price}>{yacht.price} руб/час</div>
                <div className={s.btn}>Забранировать</div>
              </div>
              <img
                src={yacht.image}
                alt={"фото яхты"}
                style={{
                  width: "670px",
                  height: "645px",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Yacht;
