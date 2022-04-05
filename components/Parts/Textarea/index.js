import { React, useState } from "react";
import styles from "./Textarea.module.scss";

function Textarea(props) {
  return (
    <div>
      <textarea
        className={styles.addText}
        placeholder={props.placeholder}
      ></textarea>
    </div>
  );
}

export default Textarea;
