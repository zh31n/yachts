import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import s from "./Catering.module.scss";
import BigWhiteInp from "../../Components/BigWhiteInp/BigWhiteInp.jsx";
import { NavLink } from "react-router-dom";
import useQuery from "../../hooks/useQuery.js";
import api from "../../api/index.js";

const Catering = props => {
  const town = useQuery("town");

  const [info, setInfo] = useState({});

  useEffect(() => {
    api.getService(town, "Кейтеринг").then(res => {
      setInfo(res.data);
    });
  }, []);

  return (
    <>
      <Header town={town} />
      <div className={s.search}>
        <div className="container">
          <div className={s.search_i}>
            <h3 className={s.title}>Кейтеринг в городе {town}</h3>
          </div>
        </div>
      </div>
      <div className={s.garant}>
        <div className="container">
          <div className={s.garant_i}>
            <h3 className={s.title}>{info.name}</h3>
            <p
              style={{
                fontSize: "25px",
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

export default Catering;
