import React, { Children, cloneElement, useEffect, useState } from "react";
import styles from "./Carucel.module.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

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
        <KeyboardArrowLeftIcon
          onClick={handleLeft}
          sx={{
            color: "#333",
            fontSize: 30,
            marginTop: "-30px",
            cursor: "pointer",
            transform: "rotate(90deg)",
          }}
        />
      </div>
      <div className={styles.arrow}>
        <KeyboardArrowLeftIcon
          onClick={handleLeft}
          sx={{
            position: "absolute",
            color: "#333",
            fontSize: 30,
            marginLeft: "-30px",
            cursor: "pointer",
          }}
          className={styles.arrow}
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
        <KeyboardArrowRightIcon
          onClick={handleRight}
          sx={{
            color: "#333",
            marginTop: "300px",
            fontSize: 30,
            cursor: "pointer",
            transform: "rotate(90deg)",
          }}
        />
      </div>
      <div className={styles.arrow}>
        <KeyboardArrowRightIcon
          onClick={handleRight}
          sx={{
            position: "absolute",
            color: "#333",
            fontSize: 30,
            marginLeft: "600px",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default Carucel;
