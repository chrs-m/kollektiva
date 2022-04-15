import { React, useState } from "react";
import Image from "next/image";
import styles from "./DetailSummary.module.scss";

function DetailSummary(props) {
  return (
    <div className={styles.DetailSummary}>
      <h3>{props.headline}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default DetailSummary;
