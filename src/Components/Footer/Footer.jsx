import React, { useRef } from "react";
import s from "./Footer.module.scss";
import telegram from "../../assets/telegram.svg";
import whatsappp from "../../assets/whatsapp.svg";


const Footer = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f48uwp8",
        "template_5o8xlu8",
        form.current,
        "hfE1XWRw1peqJCGMj"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={s.main_container}>
      <div className={s.form_container}>
        <form onSubmit={sendEmail} ref={form}>
          <label className={s.text}>Свяжитесь и получите консультацию!</label>
          <label>Ваш номер телефона</label>
          <input placeholder="Ваш номер" type="text" name="user_phone" />
          <label>Ваше имя</label>
          <input placeholder="Ваше имя" type="text" name="user_name" />
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
