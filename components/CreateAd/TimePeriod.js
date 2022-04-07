import React from "react";
import styles from "../../styles/AdStyling/TimePeriod.module.scss";
import ManyOptionsButton from "../Parts/ManyOptionsBtn";
import InputHalf from "../Parts/InputHalf";

function TimePeriod({ formData, setFormData }) {
  return (
    <div className={styles.container}>
      <h2>Klicka i det alternativ som passar dig eller fyll i egna datum</h2>
      <div className={styles.timeContainer}>
        <ManyOptionsButton text="Snarast möjligast" />
        <ManyOptionsButton text="Jag är flexibel" />
      </div>

      <h2 className={styles.bold}>Anpassa datum</h2>
      <div className={styles.dateContainer}>
        <div className={styles.date}>
          <label>Inflytt</label>
          <InputHalf
            placeholder="05-10-22"
            value={formData.rentFrom}
            onChange={(event) => {
              setFormData({ ...formData, rentFrom: event.target.value });
            }}
          />
        </div>
        <div className={styles.date}>
          <label>Utflytt</label>
          <InputHalf
            placeholder="05-12-23"
            value={formData.rentFrom}
            onChange={(event) => {
              setFormData({ ...formData, rentTo: event.target.value });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default TimePeriod;
