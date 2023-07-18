import React from "react";
import s from "./Main.module.scss";
import BigWhiteInp from "../../Components/BigWhiteInp/BigWhiteInp.jsx";
import GarantItem from "../../Components/GarantItem/GarantItem.jsx";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Footer from "../../Components/Footer/Footer";

const Main = props => {
  const data = [
    {
      title: "Доступность",
      num: 1,
      txt: "Насладитесь обширным выбором яхт различных типов и размеров, начиная от небольших катеров до роскошных яхт, которые доступны в городе Сочи. С более чем 50 яхтами в нашем флоте, начиная от 28-футовых катеров до 72-футовых мегаяхт, вы можете выбрать идеальную яхту, которая соответствует вашим потребностям и бюджету.",
    },
    {
      title: "Широкий спектр допольнительных услуг",
      num: 2,
      txt: "Получите полный спектр дополнительных услуг от нашего чартерного агентства в Сочи, которое берет на себя все организационные вопросы, связанные с арендой яхты. Мы обеспечим выбор яхты, составление маршрута, трансферы и доставку продуктов питания на борт, так что вы можете наслаждаться своим отдыхом, не беспокоясь о деталях.",
    },
    {
      title: "Впечатления",
      num: 3,
      txt: "Аренда яхты в Сочи обеспечит вам незабываемые впечатления, создавая яркие эмоции на долгое время. Вы можете плавать в кристально чистой воде, наслаждаться живописными пейзажами и ощущать свободу и роскошь на борту наших прекрасно оборудованных яхт.",
    },
    {
      title: "Безопасность",
      num: 4,
      txt: "Мы гарантируем безопасность во время вашей поездки на яхте в городе Сочи, предоставляя проверенные и безопасные яхты, которые прошли все необходимые технические и морские проверки. Наша команда профессионалов на борту яхты обеспечит вашу безопасность и комфорт во время плавания.",
    },
  ];

  const [town, setTown] = useState("");

  const garantItems = data.map(i => (<GarantItem txt={i.txt} num={i.num} title={i.title} />));

  return (
    <>
      <div className={s.search}>
        <div className="container">
          <div className={s.search_i}>
            <h3 className={s.title}>
              Арендуйте яхту и наслаждйтесь
              <br /> морским отдыхом.
            </h3>
            <h3 className={s.sup}>Широкий выбор яхт для любых потребностей</h3>
            <div className={s.inp_cos}>
              <BigWhiteInp place={"Укажите страну"} />
              <BigWhiteInp
                place={"Укажите город"}
                value={town}
                setTown={setTown}
              />
              <NavLink to={`/town?town=${town.toLowerCase()}`}>
                <button className={s.bigBtn}>Найти</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className={s.garant}>
        <div className="container">
          <div className={s.garant_i}>
            <h3 className={s.title}>Мы гарантируем</h3>
            <div className={s.contG}>{garantItems}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
