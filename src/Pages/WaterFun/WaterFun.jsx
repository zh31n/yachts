import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import s from "./WaterFun.module.scss";
import BigWhiteInp from "../../Components/BigWhiteInp/BigWhiteInp.jsx";
import { NavLink } from "react-router-dom";
import api from "../../api/index.js";
import useQuery from "../../hooks/useQuery.js";
import Carucel from "./Carucel/Carucel.jsx";

const WaterFun = props => {
  const town = useQuery("town");

  const [images, setImages] = useState([]);
  const [price, setPrices] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+");

  const screenWidth = window.screen.width;

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
    api.getService(town, "Водные развлечения").then(res => {
      console.log(res.data);
      setImages(JSON.parse(res.data.imageUrl));
      setPrices(JSON.parse(res.data.des));
    });
  }, []);

  return (
    <>
      <Header town={town} />
      <div className={s.search}>
        <div className="container">
          <div className={s.search_i}>
            <h3 className={s.title}>
              Водные развлечения в городе <span className="cityUp">{town}</span>
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
            <h3 className={s.title}>Водные развлечения</h3>

            <Carucel>
              {images.map(el => {
                console.log(el);
                return (
                  <img
                    style={
                      screenWidth > 1000
                        ? {
                            minWidth: "1200px",
                            widthl: "1200px",
                            height: "100%",
                          }
                        : { minWidth: "350px", widthl: "350px", height: "100%" }
                    }
                    src={
                      "http://62.113.104.182:80/file?filename=1689770713928-postImg.png"
                    }
                  />
                );
              })}
            </Carucel>

            <div className={s.prices_container}>
              {price.map(el => (
                <div>
                  <p>{el.name}</p>
                  <p>{el.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WaterFun;
