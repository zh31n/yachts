import React from 'react';
import s from './Yacht.module.scss';
import Header from "../../Components/Header/Header.jsx";
import y from '../../assets/Y.jpg'

const Yacht = (props) => {
    return (
        <>
            <Header/>
            <div className={'container'}>
                <div className={s.titleY}>Информация о яхте</div>
                <div className={s.cardY}>
                    <div className={s.cardI}>
                        <div className={s.title}>Информамция о яхте</div>
                        <div className={s.inf}>
                            <span>Название яхты</span>
                            <span>Peace</span>
                        </div>
                        <div className={s.inf}>
                            <span>Пассажиров</span>
                            <span>12</span>
                        </div>
                        <div className={s.inf}>
                            <span>Длина</span>
                            <span>30m</span>
                        </div>
                        <p className={s.desc}>
                            Лодка оснащена новейшими технологиями. 3 Спальных команты. 2 Кухни.
                            Удобнейший нос
                        </p>
                        <div className={s.price}>27 000 руб/час</div>
                        <div className={s.btn}>Забранировать</div>
                    </div>
                    <img src={y} alt={'фото яхты'} style={{width: '670px', height: '645px', borderRadius: '20px'}}/>
                </div>
            </div>
        </>
    );
};

export default Yacht;