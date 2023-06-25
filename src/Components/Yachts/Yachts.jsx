import React from "react";
import styles from "./Yachts.module.scss";
import YachtCard from "./YachtCard/YachtCard";
import { useParams } from "react-router-dom";

const Yachts = ({ yachts }) => {
  return (
    <div className={styles.main_container}>
      <div className={styles.text_container}>
        <p>Каталог яхт</p>
      </div>
      <div className={styles.yachts_container}>
        {yachts.map(function (el, index) {
          return (
            <YachtCard
              id={el._id}
              key={index}
              img={el.imageUrl}
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
