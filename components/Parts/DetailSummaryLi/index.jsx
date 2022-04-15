import { React, useState } from "react";
import Image from "next/image";
import styles from "./DetailSummaryLi.module.scss";

function DetailSummary(props) {
  return (
    <div className={styles.DetailSummaryLi}>
      <h3>{props.headline}</h3>
      {props.itemOne && <li>{props.itemOne}</li>}
      {props.itemTwo && <li>{props.itemTwo}</li>}
      {props.itemThree && <li>{props.itemThree}</li>}
    </div>
  );
}

export default DetailSummary;
