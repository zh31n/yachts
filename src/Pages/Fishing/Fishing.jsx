import React, {useState} from 'react';
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import s from "./Fishing.module.scss";
import BigWhiteInp from "../../Components/BigWhiteInp/BigWhiteInp.jsx";
import {NavLink} from "react-router-dom";

const Fishing = (props) => {

    const [town,setTown] = useState();

    return (
        <>
            <Header/>
            <div className={s.search}>
                <div className="container">
                    <div className={s.search_i}>
                        <h3 className={s.title}>
                            Арендуйте яхту и наслаждйтесь
                            <br /> морским отдыхом.
                        </h3>
                        <h3 className={s.sup}>Широкий выбор яхт для любых потребностей</h3>
                        <div className={s.inp_cos}>
                            <BigWhiteInp place={"Укажите страну"} />
                            <BigWhiteInp
                                place={"Укажите город"}
                                value={town}
                                setTown={setTown}
                            />
                            <NavLink to={`/town?town=${town}`}>
                                <button className={s.bigBtn}>Найти</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Fishing;