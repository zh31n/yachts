import React, { useEffect, useState } from "react";
import styles from "./Filter.module.scss";
import api from "../../api";

const Filter = ({
  minPrice,
  maxPrice,
  setMinPass,
  setMinPrice,
  setMaxPrice,
  minPass,
  maxPass,
  setMaxPass,
  setCurrentType,
  yachts,
  setYachtsArray,
  currentType,
  town,
}) => {
  const [type, setType] = useState([]);
  useEffect(() => {
    setType([]);
    yachts.map(function (el, index) {
      setType(data => [...data, el.spec.class]);
    });
  }, []);

  const handleClick = () => {
    if ((maxPrice == "") & (maxPass == "")) {
      const newArr = yachts.filter(el => el.spec.class == currentType);

      setYachtsArray(newArr);
    } else if (maxPrice == "") {
      let newArr = [];
      yachts.map(el => {
        if (el.spec.class == currentType) {
          if (Number(el.spec.passenger_capacity) * -1 > Number(maxPass) * -1) {
            newArr.push(el);
          }
        }
      });

      setYachtsArray(newArr);
    } else if (maxPass == "") {
      let newArr = [];
      yachts.map(el => {
        if (el.spec.class == currentType) {
          if (Number(el.spec.price) >= Number(maxPrice)) {
            newArr.push(el);
          }
        }
      });
      setYachtsArray(newArr);
    } else {
      api
        .filteredYachts(maxPass, maxPrice, minPrice, minPass, currentType, town)
        .then(data => {
          console.log(data.data);
          setYachtsArray(data.data);
        });
    }
    setMaxPass("");
    setMaxPrice("");
    setMinPass("");
    setMinPrice("");
  };

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
      </div>
      <button className={styles.button} onClick={handleClick}>
        Применить
      </button>
      <button
        className={styles.button}
        onClick={() => {
          api.AllYachts(town).then(data => {
            setYachtsArray(data.data);
          });
        }}
      >
        Сбросить
      </button>
    </div>
  );
};

export default Filter;
