import { React, useState } from "react";
import styles from "./Card.module.scss";
import Image from "next/image";
import buttonImg from "../../../assets/images/Frame.png";

function Card(props) {
  return (
    <div className={styles.Container}>
      <Image src={buttonImg} width={150} height={100} alt="Icons" />
      <h2>{props.header}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default Card;
