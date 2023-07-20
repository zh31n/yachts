import React from "react";
import s from "./BigWhiteInp.module.scss";

const BigWhiteInp = props => {
  return (
    <div className={s.container}>
      <input
        type="text"
        placeholder={props.place}
        value={props.value}
        onChange={e => {
          props.setTown(e.target.value);
          if (props.setActive) {
            props.setActive(true);
          }
          if (e.target.value == "") {
            props.setActive(false);
          }
        }}
      />
    </div>
  );
};

export default BigWhiteInp;
