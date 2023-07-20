import React, { Children, cloneElement, useEffect, useState } from "react";
import styles from "./Carucel.module.scss";
import arrow from "../../../assets/arrow.png";

const PAGE_WIDTH = 1200;

const Carucel = ({ children, lenght }) => {
  const [page, setPage] = useState(0);

  const screenWidth = window.screen.width;

  const handleLeft = () => {
    if (screenWidth > 1000) {
      if (page < 0) {
        setPage(page + 1200);
      }
    } else {
      if (page < 0) {
        setPage(page + 370);
      }
    }
  };

  const handleRight = () => {
    if (screenWidth > 1000) {
      if (children.length * 1200 - 1200 > page * -1) {
        setPage(page - 1200);
      }
    } else {
      if (children.length * 370 - 370 > page * -1) {
        setPage(page - 370);
      }
    }
  };

  return (
    <div className={styles.main_container}>
      <div
        className={styles.arrow_mobile}
        onClick={() => {
          handleLeft();
        }}
      >
        <img
          src={arrow}
          style={{ transform: "rotate(180deg)", width: "60px" }}
        />
      </div>
      <div className={styles.window}>
        <div
          className={styles.all_pages}
          style={{ transform: `translateX(${page}px)` }}
        >
          {children}
        </div>
      </div>
      <div
        className={styles.arrow_mobile}
        onClick={() => {
          handleRight();
        }}
      >
        <img src={arrow} style={{ width: "60px" }} />
      </div>
    </div>
  );
};

export default Carucel;
