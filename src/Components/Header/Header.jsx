import React, { useState } from "react";
import s from "./Header.module.css";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import Tel from "../../assets/tel_icon.svg";

const Header = props => {
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <div className={s.header}>
        <div className={"container"}>
          <div className={s.h_i}>
            <img className={s.logo} src={Logo} alt={"logo"} />
            <div className={s.nav}>
              <Link to={"/"}>Главная</Link>
              <Link to={`/town?town=${props.town}`}>Яхты</Link>
              <Link to={`/`}>Услуги</Link>
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
          <Link
            to={`/`}
            onClick={() => {
              setMobile(!mobile);
            }}
          >
            Услуги
          </Link>
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
    </>
  );
};

export default Header;
