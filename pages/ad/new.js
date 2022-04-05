import { React, useState } from "react";
import Form from "../../components/CreateAd/Form";
import Nav from "../../components/Nav/Nav";
import styles from "../../styles/NewAd.module.scss";

function newAd() {
  return (
    <div className={styles.container}>
      <div className={styles.header}></div>
      <Form />
    </div>
  );
}

export default newAd;
