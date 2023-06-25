import React from "react";
import s from "./Footer.module.scss";
import telegram from '../../assets/telegram.svg'
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
                        <input placeholder="Ваш номер"/>
                    </div>
                    <div className={s.label_container}>
                        <label>Ваше имя</label>
                        <input placeholder="Ваше имя"/>
                    </div>
                    <button className={s.btn}>Отправить</button>
                </form>
            </div>
            <div className={s.about}>
                <div style={{fontSize:'25px',fontWeight:'600'}}>
                    +7 (800)201-82-27
                </div>
                <div style={{display: 'flex', gap: '1rem', justifyContent: 'space-around', marginTop: '10px'}}>
                    <a href="https://t.me/+79052477324">
                        <img src={telegram} style={{height: '40px', width: '40px'}} alt=""/>
                    </a>
                    <a href="https://wa.me/79052477324">
                        <img src={whatsapp} style={{height: '40px', width: '40px'}} alt=""/>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Footer;
