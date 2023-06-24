import React from 'react';
import s from './GarantItem.module.scss'

const GarantItem = (props) => {
    return (
        <div className={s.cont}>
            <span className={s.num}>{props.num}</span>
            <div className={s.title}>{props.title}</div>
            <p className={s.txt}>{props.txt}</p>
        </div>
    );
};

export default GarantItem;