import React from "react";
import styles from "./Filter.module.scss";

const Filter = ({
  minPrice,
  maxPrice,
  setMinPass,
  setMinPrice,
  setMaxPrice,
  minPass,
  maxPass,
  setMaxPass,
  type,
  setType,
  setCurrentType,
  yachts,
}) => {
  // function setTypes() {
  //   const types = [];
  //   yachts.map(function (el) {
  //     types.push(el.spec.class);
  //   });
  //   setType([...types]);
  // }

  // // setTypes();

  return (
    <div className={styles.filter_container}>
      <div className={styles.cont}>
        <p className={styles.text}>Мин. цена</p>
        <input
          className={styles.input}
          value={minPrice}
          type="number"
          onChange={e => {
            setMinPrice(e.target.value);
          }}
          placeholder="Введите мин цену"
        />
      </div>
      <div className={styles.cont}>
        <p className={styles.text}>Макс. цена</p>
        <input
          className={styles.input}
          value={maxPrice}
          type="number"
          onChange={e => {
            setMaxPrice(e.target.value);
          }}
          placeholder="Введите макс цену"
        />
      </div>
      <div style={{ height: "150px" }}>
        <p className={styles.text}>Пассажировместимость</p>
        <input
          className={styles.input}
          placeholder="От"
          value={minPass}
          type="number"
          onChange={e => {
            setMinPass(e.target.value);
          }}
        />
        <input
          className={styles.input}
          placeholder="До"
          value={maxPass}
          type="number"
          onChange={e => {
            setMaxPass(e.target.value);
          }}
        />
      </div>
      <div className={styles.cont}>
        <p className={styles.text}>Тип</p>
        <select
          className={styles.input}
          onChange={e => {
            setCurrentType(e.target.value);
          }}
        >
          {type.map(function (el) {
            return <option>{el}</option>;
          })}
        </select>
        <button className={styles.button}>Применить</button>
      </div>
    </div>
  );
};

export default Filter;
