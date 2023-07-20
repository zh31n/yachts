import React, { useEffect, useState } from "react";
import styles from "./Yachts.module.scss";
import YachtCard from "./YachtCard/YachtCard";
import img from "../../assets/filter.svg";
import Filter from "../Filter/Filter";
import api from "../../api";

const Yachts = ({ town, setFail }) => {
  const [fileterVis, setFilterVis] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minPass, setMinPass] = useState("");
  const [maxPass, setMaxPass] = useState("");
  const [currentType, setCurrentType] = useState("");
  const [yachts, setYachts] = useState([]);

  const [vis, setVis] = useState(false);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter == 0) {
      api.AllYachts(town).then(data => {
        if (data.data.message) {
          setFail(true);
        } else {
          if (data.data.length <= 3) {
            setVis(true);
          }
          setYachts(data.data);
          if (yachts == "Яхты не найдены") {
            console.log("YYYYESSSSS");
          }
        }
      });
      setCounter(1);
    }
  });

  return (
    <div className={styles.main_container}>
      <div className={styles.text_container}>
        <div className={styles.text_cont}>
          <div className={styles.number_container}>
            <p
              className={styles.text}
              onClick={() => {
                console.log(filteredYachts);
              }}
            >
              Каталог яхт
            </p>
            <p
              style={{ fontSize: "20px" }}
              onClick={() => {
                console.log(filteredYachts, yachts);
              }}
            >
              Найдено: {yachts.length}
            </p>
          </div>
          <div>
            <img
              style={{ cursor: "pointer" }}
              src={img}
              onClick={() => setFilterVis(!fileterVis)}
            />
            {fileterVis && (
              <Filter
                minPrice={minPrice}
                maxPrice={maxPrice}
                setMinPass={setMinPass}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                minPass={minPass}
                maxPass={maxPass}
                setMaxPass={setMaxPass}
                currentType={currentType}
                setCurrentType={setCurrentType}
                yachts={yachts}
                setYachtsArray={setYachts}
                town={town}
              />
            )}
          </div>
        </div>
      </div>
      <div className={styles.yachts_container}>
        {yachts.map(function (el, index) {
          if (vis == false && index < 3) {
            return (
              <YachtCard
                key={index}
                id={el._id}
                img={el.image[0]}
                model={el.spec.model}
                des={el.description}
                name={el.spec.name}
                price={el.price}
              />
            );
          }
          if (vis === true) {
            return (
              <YachtCard
                key={index}
                id={el._id}
                img={el.image[0]}
                model={el.spec.model}
                des={el.description}
                name={el.spec.name}
                price={el.price}
              />
            );
          }
        })}
      </div>
      {vis === false ? (
        <div className={styles.show_more_container}>
          <button
            onClick={() => {
              setVis(true);
            }}
          >
            Показать все
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Yachts;
