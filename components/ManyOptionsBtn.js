import { React, useState } from "react";
import styles from "../styles/AdStyling/TypeOfLiving.module.scss";
import buttonsvg from "../assets/images/button-img.svg";

function ManyOptionsBtn(props) {
  return (
    <div>
      <button className={styles.extras}>
        <img src={buttonsvg} />
        {props.text}
      </button>
    </div>
  );
}

export default ManyOptionsBtn;
