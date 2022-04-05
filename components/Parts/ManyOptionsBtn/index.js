import { React, useState } from "react";
import Image from "next/image";
import styles from "./ManyOptionsBtn.module.scss";
import buttonImg from "../../../assets/images/buttonImg.png";

function ManyOptionsBtn(props) {
  return (
    <div>
      <button className={styles.buttonContainer}>
        <Image src={buttonImg} width={55} height={40} />
        {props.text}
      </button>
    </div>
  );
}

export default ManyOptionsBtn;
