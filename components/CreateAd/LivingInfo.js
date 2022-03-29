import React from "react";
import styles from "../../styles/AdStyling/LivingInfo.module.scss";

function LivingInfo({ formData, setFormData }) {
  // let map;

  // function initMap() {
  //   map = new google.maps.Map(document.getElementById("map"), {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 8,
  //   });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>Fyll i följande uppgifter om dig själv</h2>
        <label>Namn</label>
        <input type="text" placeholder="Agneta Andersson"></input>
        <label>Personnummer</label>
        <input type="number" placeholder="1900-01-01-0000"></input>
        <label>Kort beskrivning av dig sjäv</label>
        <textarea
          className={styles.textarea}
          rows="5"
          cols="40"
          placeholder="T.ex. Jag är en vänligen nybliven pensionär som älskar att dona i trädgården[...]"
        ></textarea>
        <small>50/500</small>
        <h2>Vart ligger bostaden?</h2>
        <label>Adress</label>
        <input type="text" placeholder="Gibraltargatan 46"></input>
        <label>Ort</label>
        <input type="text" placeholder="Göteborg"></input>
        <label>Postnummer</label>
        <input type="number" placeholder="412 80"></input>
      </div>
    </div>
  );
}

export default LivingInfo;
