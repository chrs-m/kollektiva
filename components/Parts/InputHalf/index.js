import { React, useState } from "react";
import styles from "./InputHalf.module.scss";

function Input(props) {
  return (
    <div>
      <input
        type="text"
        placeholder={props.placeholder}
        className={styles.facilities}
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
}

{
  /* <Image src={plus} width={10} height={10} /> */
}

export default Input;
