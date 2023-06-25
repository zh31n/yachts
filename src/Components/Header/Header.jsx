import React, { useState } from "react";
import s from "./Header.module.css";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import Tel from "../../assets/tel_icon.svg";

const Header = props => {
  const [mobile, setMobile] = useState(false);
  const [menuVis, setMenuVis] = useState(false);
  return (
    <>
      <div className={s.header}>
        <div className={"container"}>
          <div className={s.h_i}>
            <img className={s.logo} src={Logo} alt={"logo"} />
            <div className={s.nav}>
              <Link to={"/"}>Главная</Link>
              <Link to={`/town?town=${props.town}`}>Яхты</Link>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setMenuVis(!menuVis);
                }}
              >
                Услуги
              </p>
              <Link to={`/about?town=${props.town}`}>О нас</Link>
            </div>
            <div className={s.cont}>
              <img
                style={{ width: "32px", height: "32px" }}
                src={Tel}
                alt="telephone icon"
              />
              <span>+7(800) 201 82-27</span>
            </div>
            <div
              className={s.navM}
              onClick={() => {
                setMobile(!mobile);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      {mobile && (
        <div className={s.nav_container}>
          <Link
            to={"/"}
            onClick={() => {
              setMobile(!mobile);
            }}
          >
            Главная
          </Link>
          <Link
            to={`/town?town=${props.town}`}
            onClick={() => {
              setMobile(!mobile);
            }}
          >
            Яхты
          </Link>
          <div className={s.service_mobile}>
            <p
              onClick={() => {
                setMenuVis(!menuVis);
              }}
            >
              Услуги
            </p>
            {mobile && menuVis && (
              <div className={s.mobile_menu}>
                <Link to={`/catering?town=${props.town}`}>Кейтеринг</Link>
                <Link to={`/funwater?town=${props.town}`}>
                  Водные развлечения
                </Link>
                <Link to={`/photo?town=${props.town}`}>Фотосессия</Link>
                <Link to={`/fishing?town=${props.town}`}>Рыбалка</Link>
                <Link to={`/party?town=${props.town}`}>
                  Организация праздника в море
                </Link>
              </div>
            )}
          </div>
          <Link
            to={`/about?town=${props.town}`}
            onClick={() => {
              setMobile(!mobile);
            }}
          >
            О нас
          </Link>
        </div>
      )}
      {menuVis && !mobile && (
        <div className={s.service_container}>
          <div className={s.service}>
            <Link to={`/catering?town=${props.town}`}>Кейтеринг</Link>
            <Link to={`/funwater?town=${props.town}`}>Водные развлечения</Link>
            <Link to={`/photo?town=${props.town}`}>Фотосессия</Link>
            <Link to={`/fishing?town=${props.town}`}>Рыбалка</Link>
            <Link to={`/party?town=${props.town}`}>
              Организация праздника в море
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
