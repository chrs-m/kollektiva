import { React, useState } from "react";
import styles from "../../styles/AdStyling/Summary.module.scss";
import DetailSummary from "../Parts/DetailSummary";
import DetailSummaryLi from "../Parts/DetailSummaryLi/index.jsx";
import { FiDownload } from "react-icons/fi";

function Summary({ formData, setFormData }) {
  return (
    <div className={styles.container}>
      <img
        src={
          "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        }
        className={styles.headerImage}
      />
      <p className={styles.descriptionText}>
        Modernt familjevändligt hus med trädgård.
      </p>
      <hr className={styles.lineBreak} />
      <p>Rum i bostad hos hyresvärden Agna.</p>
      <hr className={styles.lineBreak} />
      <h3 className={styles.descriptionHeadline}>
        Önskad hjälp från hyresgäst:
      </h3>
      <p>Handla 1 gång/vecka</p>
      <hr className={styles.lineBreak} />
      <div className={styles.detailSummary}>
        <DetailSummary headline="Storlek" text="40m2" />
        <DetailSummary headline="Möblerat" text="Ja" />
        <DetailSummary headline="Inflytt" text="2022-05-15" />
        <DetailSummary headline="Utflytt" text="Tillsvidare" />
        <DetailSummary headline="Antal hyresgäster" text="2 vuxna" />
        <DetailSummary headline="Husdjur tillåtet" text="" />
      </div>
      <hr className={styles.lineBreak} />
      <div className={styles.detailSummary}>
        <DetailSummaryLi
          headline="Höjdpunkter:"
          itemOne="Modernt"
          itemTwo="Naturnära"
          itemThree="Nära affär"
        />
        <DetailSummaryLi
          headline="Faciliteter:"
          itemOne="Wifi"
          itemTwo="Trädgård"
          itemThree="Diskmaskin"
        />
      </div>
      <hr className={styles.lineBreak} />
      <DetailSummary
        headline="Adress bostad"
        text="Gibraltargatan 46, 412 68 Göteborg"
        className={styles.adressDetails}
      />
      <hr className={styles.lineBreak} />
      <div className={styles.rentDetails}>
        <h3>Månadshyra:</h3>
        <p>7 500kr</p>

        <button className={styles.downloadBtn}>
          Ladda ner dokument som PDF <FiDownload className={styles.Icon} />
        </button>
      </div>
    </div>
  );
}

export default Summary;
