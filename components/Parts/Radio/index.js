import { React } from "react";

import styles from "./Radio.module.scss";

function Radio(props) {
  return (
    <div className={styles.container}>
      <input
        className={styles.radio}
        type="radio"
        id={props.id}
        name={props.name}
        value={props.value}
      />
      <label htmlFor={props.for}>{props.text}</label>
    </div>
  );
}

export default Radio;
