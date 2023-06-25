import React from "react";
import styles from "./Yachts.module.scss";
import YachtCard from "./YachtCard/YachtCard";

const Yachts = ({ yachts, lenght }) => {
  return (
    <div className={styles.main_container}>
      <div className={styles.text_container}>
        <p>Каталог яхт</p>
        <p style={{ fontSize: "20px" }}>Найдено: {lenght}</p>
      </div>
      <div className={styles.yachts_container}>
        {yachts.map(function (el, index) {
          return (
            <YachtCard
              key={index}
              id={el._id}
              img={el.image}
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
