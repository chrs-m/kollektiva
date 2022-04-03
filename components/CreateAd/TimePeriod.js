import React from "react";
import styles from "../../styles/AdStyling/TimePeriod.module.scss";

function TimePeriod({ formData, setFormData }) {
  return (
    <div className={styles.container}>
      <h2>Klicka i det alternativ som passar dig eller fyll i egna datum</h2>
      <button>Snarast möjligast</button>
      <button>Jag är flexibel</button>
      <div>
        <h2>Anpassa datum</h2>
        <label>Från</label>
        <input
          type="date"
          value={formData.rentFrom}
          onChange={(event) => {
            setFormData({ ...formData, rentFrom: event.target.value });
          }}
        ></input>
        <label>Till</label>
        <input
          type="date"
          value={formData.rentTo}
          onChange={(event) => {
            setFormData({ ...formData, rentTo: event.target.value });
          }}
        ></input>
      </div>
    </div>
  );
}

export default TimePeriod;
