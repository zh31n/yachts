import React from 'react';
import s from './BigWhiteInp.module.scss';

const BigWhiteInp = (props) => {
    return (
        <div className={s.container}>
            <input type="text" placeholder={props.place}/>
        </div>
    );
};

export default BigWhiteInp;