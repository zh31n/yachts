import React, { useEffect, useState } from "react";
import s from "./Yacht.module.scss";
import Header from "../../Components/Header/Header.jsx";
import y from "../../assets/Y.jpg";
import Loader from "../../Components/Loader/Loader";
import api from "../../api";
import { useParams } from "react-router-dom";
import Fail from "../Fail/Fail";
import Modal from "../../Components/Modal/Modal";

const Yacht = props => {
  const [yacht, setYacht] = useState({});
  const [loader, setLoader] = useState(true);
  const [fail, setFail] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [vis, setVis] = useState(true);

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
    setVis(true);
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
                  <span>{yacht.spec.length} m</span>
                </div>
                <p className={s.desc}>{yacht.description}</p>
                <div className={s.price}>{yacht.price} руб/час</div>
                <div className={s.btn} onClick={sendEmail}>
                  Забранировать
                </div>
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
