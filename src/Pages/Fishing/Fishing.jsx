import React, {useState} from 'react';
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import s from "./Fishing.module.scss";
import BigWhiteInp from "../../Components/BigWhiteInp/BigWhiteInp.jsx";
import {NavLink} from "react-router-dom";

const Fishing = (props) => {

    const [town, setTown] = useState();

    return (
        <>
            <Header/>
            <div className={s.search}>
                <div className="container">
                    <div className={s.search_i}>
                        <h3 className={s.title}>
                            Рыбалка на яхте в {props.town}
                        </h3>
                        <div className={s.inp_cos}>
                            <BigWhiteInp place={"Укажите страну"}/>
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
            <div className={s.garant}>
                <div className="container">
                    <div className={s.garant_i}>
                        <h3 className={s.title}>Рыбалка</h3>
                        <p style={{fontSize: '28px',marginTop:'20px',marginBottom:'20px'}}>
                            Хотите поймать свое удачу на яхте? Рыбалка на яхте - это незабываеиый опыт, который
                            обязательно стоит попробовать во время вашего в Сочи. Однако не все яхты подходят
                            длярыбалки, поэтому при выборе яхты для рыбалки необходимо учитывать ряд факторов Когдавы
                            арендуете яхту, то на ней
                            обычно есть все необходимое для
                            рыбалки: крючки, удочки и другое.
                            специальное оборудование. Если вам
                            хочется по ловить рыбу во время отдыха
                            на яхте, достаточно спросить у
                            менеджера, возможна ли такая опция на
                            выбранной яхте. Обычно это не вызывает
                            проблем, поскольку подавляющее.
                            большинство яхт предоставляют такую
                            возможность.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Fishing;