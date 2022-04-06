import { React, useState } from "react";
import Form from "../../components/CreateAd/Form";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../styles/NewAd.module.scss";

function newAd() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.header}></div>
      <Form />
    </div>
  );
}

export default newAd;
