import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import s from "./Photo.module.scss";
import BigWhiteInp from "../../Components/BigWhiteInp/BigWhiteInp.jsx";
import { NavLink } from "react-router-dom";
import api from "../../api/index.js";
import useQuery from "../../hooks/useQuery.js";

const Photo = props => {
  const town = useQuery("town");

  const [info, setInfo] = useState({});

  useEffect(() => {
    api.getService(town, "Водные развлечения").then(res => {
      setInfo(res.data);
    });
  }, []);

  return (
    <>
      <Header town={town} />
      <div className={s.search}>
        <div className="container">
          <div className={s.search_i}>
            <h3 className={s.title}>Фотосессия в городе {town}</h3>
          </div>
        </div>
      </div>
      <div className={s.garant}>
        <div className="container">
          <div className={s.garant_i}>
            <h3 className={s.title}>{info.name}</h3>
            <p
              style={{
                fontSize: "28px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              {info.des}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Photo;
