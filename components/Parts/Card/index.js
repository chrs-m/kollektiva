import { React, useState } from "react";
import styles from "./Card.module.scss";
import Image from "next/image";
import buttonImg from "../../../assets/images/buttonImg.png";

function Card(props) {
  return (
    <div className={styles.Container}>
      <Image src={buttonImg} width={100} height={80} />
      <h2>{props.header}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default Card;
