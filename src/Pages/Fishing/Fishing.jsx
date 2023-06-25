import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import s from "./Fishing.module.scss";
import BigWhiteInp from "../../Components/BigWhiteInp/BigWhiteInp.jsx";
import { NavLink } from "react-router-dom";
import useQuery from "../../hooks/useQuery.js";
import api from "../../api/index.js";

const Fishing = props => {
  const town = useQuery("town");

  const [info, setInfo] = useState({});

  useEffect(() => {
    api.getService(town, "Рыбалка").then(res => {
      setInfo(res.data);
    });
  }, []);

  return (
    <>
      <Header town={town} />
      <div className={s.search}>
        <div className="container">
          <div className={s.search_i}>
            <h3 className={s.title}>Рыбалка на яхте в {town}</h3>
          </div>
        </div>
      </div>
      <div className={s.garant}>
        <div className="container">
          <div className={s.garant_i}>
            <h3 className={s.title}>{info.name}</h3>
            <p className={s.text}>{info.des}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Fishing;
