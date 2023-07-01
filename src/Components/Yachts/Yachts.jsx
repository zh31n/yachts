import React, { useEffect, useState } from "react";
import styles from "./Yachts.module.scss";
import YachtCard from "./YachtCard/YachtCard";
import img from "../../assets/filter.svg";
import Filter from "../Filter/Filter";

const Yachts = ({ yachts, lenght }) => {
  const [fileterVis, setFilterVis] = useState(true);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPass, setMinPass] = useState(0);
  const [maxPass, setMaxPass] = useState(0);
  const [type, setType] = useState([]);
  const [currentType, setCurrentType] = useState("");

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
              Найдено: {lenght}
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
                type={type}
                setType={setType}
                currentType={currentType}
                setCurrentType={setCurrentType}
                yachts={yachts}
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
