import React, { useEffect, useState } from "react";
import styles from "./Yachts.module.scss";
import YachtCard from "./YachtCard/YachtCard";
import img from "../../assets/filter.svg";
import Filter from "../Filter/Filter";
import api from "../../api";

const Yachts = ({ town }) => {
  const [fileterVis, setFilterVis] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPass, setMinPass] = useState(0);
  const [maxPass, setMaxPass] = useState(0);
  const [currentType, setCurrentType] = useState("");
  const [yachts, setYachts] = useState([]);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter == 0) {
      console.log("effect");
      api.AllYachts(town).then(data => {
        if (data.data.message) {
          props.setFail(true);
        }
        setYachts(data.data);
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
        })}
      </div>
    </div>
  );
};

export default Yachts;
