import React from "react";
import styles from "./Yachts.module.scss";
import YachtCard from "./YachtCard/YachtCard";

const Yachts = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.text_container}>
        <p>Каталог яхт</p>
      </div>
      <div className={styles.yachts_container}>
        <YachtCard />
        <YachtCard />
        <YachtCard />
        <YachtCard />
        <YachtCard />
        <YachtCard />
        <YachtCard />
        <YachtCard />
        <YachtCard />
        <YachtCard />
        <YachtCard />
        <YachtCard />
        <YachtCard />
        <YachtCard />
        <YachtCard />
        <YachtCard />
        <YachtCard />
        <YachtCard />
        <YachtCard />
        <YachtCard />
        <YachtCard />
        <YachtCard />
        <YachtCard />
        <YachtCard />
      </div>
    </div>
  );
};

export default Yachts;
