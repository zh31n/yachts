import React, { useState } from "react";
import img from "../../../assets/arrow.svg";
import styles from "./FAQCard.module.scss";

const FAQCard = ({ answer, question }) => {
  const [textVis, setTextVis] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setTextVis(!textVis);
        }}
        className={styles.container}
      >
        <p className={styles.text}>{question}</p>
        <img src={img} />
      </div>
      {textVis && (
        <div className={styles.answer_container}>
          <p>{answer}</p>
        </div>
      )}
    </>
  );
};

export default FAQCard;
