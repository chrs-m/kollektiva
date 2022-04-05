import { React, useState } from "react";
import Image from "next/image";
import styles from "./Input.module.scss";

import plus from "../../../assets/images/plus.png";

function Input(props) {
  return (
    <div>
      <input
        type="text"
        placeholder={props.placeholder}
        className={styles.facilities}
      ></input>
    </div>
  );
}

{
  /* <Image src={plus} width={10} height={10} /> */
}

export default Input;
