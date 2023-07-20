import React, { Children, cloneElement, useEffect, useState } from "react";
import styles from "./Carucel.module.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import arrow from "../../../assets/arrow.png";

const PAGE_WIDTH = 600;

const Carucel = ({ children, lenght }) => {
  const [pages, setPages] = useState([]);

  const [page, setPage] = useState(0);

  const screenWidth = window.screen.width;

  const handleLeft = () => {
    if (screenWidth > 1000) {
      if (page < 0) {
        setPage(page + 600);
      }
    } else {
      if (page < 0) {
        setPage(page + 350);
      }
    }
  };

  const handleRight = () => {
    if (screenWidth > 1000) {
      if (children.length * 600 - 600 > page * -1) {
        setPage(page - 600);
      }
    } else {
      if (children.length * 350 - 350 > page * -1) {
        setPage(page - 350);
      }
    }
  };

  useEffect(() => {
    setPages(
      Children.map(children, child => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: screenWidth > 1000 ? `${PAGE_WIDTH}px` : `350px`,
            maxWidth: screenWidth > 1000 ? `${PAGE_WIDTH}px` : `350px`,
          },
        });
      })
    );
  }, []);

  return (
    <div className={styles.main_container}>
      <div className={styles.arrow_mobile}>
        <img
          src={arrow}
          onClick={handleLeft}
          style={{
            color: "#333",
            cursor: "pointer",
            position: "absolute",
            marginLeft: "-30px",
            width: "60px",
            height: "60px",
            marginTop: "-15px",
            transform: "rotate(180deg)",
          }}
        />
      </div>
      <div className={styles.arrow}>
        <img
          src={arrow}
          onClick={handleLeft}
          style={{
            zIndex: "1",
            color: "#333",
            cursor: "pointer",
            position: "absolute",
            marginTop: "-15px",
            marginLeft: "-55px",
            width: "80px",
            height: "80px",
            transform: "rotate(180deg)",
          }}
        />
      </div>
      <div className={styles.window}>
        <div
          className={styles.all_pages}
          style={{ transform: `translateX(${page}px)` }}
        >
          {pages}
        </div>
      </div>
      <div className={styles.arrow_mobile}>
        <img
          src={arrow}
          onClick={handleRight}
          style={{
            color: "#333",
            cursor: "pointer",
            position: "absolute",
            marginLeft: "320px",
            width: "60px",
            height: "60px",
            marginTop: "-15px",
          }}
        />
      </div>
      <div className={styles.arrow}>
        <img
          src={arrow}
          onClick={handleRight}
          style={{
            marginTop: "-15px",
            color: "#333",
            cursor: "pointer",
            position: "absolute",
            marginLeft: "570px",
            width: "80px",
            height: "80px",
          }}
        />
      </div>
    </div>
  );
};

export default Carucel;
