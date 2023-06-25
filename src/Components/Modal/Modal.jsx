import React from "react";
import styles from "./Modal.module.scss";
import api from "../../api";

const Modal = ({ setVis, name, phone, setName, setPhone, yacht }) => {
  const handleClick = () => {
    api.sendMailWithYacht(name, phone, yacht).then(() => {
      setVis(false);
    });
  };
  return (
    <div
      className={styles.main_container}
      onClick={() => {
        setVis(false);
      }}
    >
      <div
        className={styles.modal_container}
        onClick={e => {
          e.stopPropagation();
          console.log(yacht);
        }}
      >
        <input
          placeholder="Введите имя"
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
        />
        <input
          placeholder="Введите номер"
          value={phone}
          onChange={e => {
            setPhone(e.target.value);
          }}
        />
        <button onClick={handleClick}>Отправить</button>
      </div>
    </div>
  );
};

export default Modal;
