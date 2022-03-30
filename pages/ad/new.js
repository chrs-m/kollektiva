import { React, useState } from "react";
import Form from "../../components/CreateAd/Form";
import styles from "../../styles/NewAd.module.scss";

function newAd() {
  return (
    <div>
      <div className={styles.header}>
        <Form />
      </div>
    </div>
  );
}

export default newAd;
