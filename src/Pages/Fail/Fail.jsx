import React from 'react';
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import s from './Fail.module.scss'
import {Link} from "react-router-dom";

const Fail = (props) => {
    return (
        <>
            <Header/>
            <div className={s.inner}>
                <span>Страница не найдена 404</span>
                <Link to={'/'}>На главную</Link>
            </div>
            <Footer/>
        </>
    );
};

export default Fail;