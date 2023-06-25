import React from "react";
import s from "./Footer.module.scss";
import telegram from '../../assets/telegramm.svg'
import whatsapp from '../../assets/whatsapp.svg'

const Footer = () => {
  return (
    <div className={s.main_container}>
      <div className={s.form_container}>
        <form>
          <label className={s.text}>
            Свяжитесь и получите консультацию!
          </label>
          <div className={s.label_container}>
            <label>Ваш номер телефона</label>
            <input placeholder="Ваш номер" />
          </div>
          <div className={s.label_container}>
            <label>Ваше имя</label>
            <input placeholder="Ваше имя" />
          </div>
        </form>
      </div>
      <div className={s.about}>
          <div style={{display:'flex',gap:'1rem'}}>
              <a href="">
                  <img src={telegram} style={{height:'60px',width:'60px'}} alt=""/>
              </a>
              <a href="">
                  <img src={whatsapp} style={{height:'60px',width:'60px'}} alt=""/>
              </a>
          </div>
          <div className="">

          </div>
      </div>
    </div>
  );
};

export default Footer;
