import { React, useState } from "react";
import Image from "next/image";
import styles from "./Input.module.scss";

import plus from "../../../assets/img/plus.png";

function Input(props) {
  return (
    <div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={styles.facilities}
      ></input>
    </div>
  );
}


Input.defaultProps = {
  type: "text",
};
export default Input;
