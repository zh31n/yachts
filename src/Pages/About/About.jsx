import React, { useEffect, useState } from "react";
import styles from "./About.module.scss";
import Header from "../../Components/Header/Header";
import useQuery from "../../hooks/useQuery";
import api from "../../api";
import Footer from "../../Components/Footer/Footer";

const About = () => {
  const town = useQuery("town");

  const [text, setText] = useState("");

  useEffect(() => {
    api.getAbout(town).then(data => {
      console.log(data.data);
      data.data.text ? setText(data.data.text) : setText(data.data.message);
    });
  }, []);

  return (
    <>
      <Header town={town} />
      <div className={styles.main_photo} />
      <div className={styles.main_container}>
        <p className={styles.main_text}>О нас</p>
        <div className={styles.text_container}>
          <p>{text}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
