import React, { useEffect, useState } from "react";
import styles from "./FAQ.module.scss";
import api from "../../api";
import FAQCard from "./FAQCard/FAQCard";

const FAQ = ({ town }) => {
  const [faq, setFaq] = useState([]);
  useEffect(() => {
    api.getFAQ(town).then(res => {
      setFaq(res.data);
    });
  }, []);

  return (
    <div className={styles.main_container}>
      <p className={styles.text}>F.A.Q</p>
      <div className={styles.answer_container}>
        {faq.map(function (el, index) {
          return (
            <FAQCard key={index} answer={el.answer} question={el.question} />
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
