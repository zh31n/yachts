import React, { useRef, useState } from "react";
import s from "./Footer.module.scss";
import telegram from "../../assets/telegram.svg";
import whatsappp from "../../assets/whatsapp.svg";
import emailjs from "@emailjs/browser";
import api from "../../api";

const Footer = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

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
    <div className={s.main_container}>
      <div className={s.form_container}>
        <form onSubmit={sendEmail}>
          <label className={s.text}>Свяжитесь и получите консультацию!</label>
          <label>Ваш номер телефона</label>
          <input
            placeholder="Ваш номер"
            type="text"
            name="user_phone"
            value={phone}
            onChange={e => {
              setPhone(e.target.value);
            }}
          />
          <label>Ваше имя</label>
          <input
            placeholder="Ваше имя"
            type="text"
            name="user_name"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
          <button className={s.btn}>Отправить</button>
        </form>
      </div>
      <div className={s.about}>
        <div style={{ display: "flex", gap: "1rem" }}>
          <a href="">
            <img
              src={telegram}
              style={{ height: "40px", width: "40px" }}
              alt=""
            />
          </a>
          <a href="">
            <img
              src={whatsappp}
              style={{ height: "40px", width: "40px" }}
              alt=""
            />
          </a>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Footer;
