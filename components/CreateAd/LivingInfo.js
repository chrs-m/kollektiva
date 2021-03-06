import React, { useState } from "react";
import styles from "../../styles/AdStyling/LivingInfo.module.scss";
import Textarea from "../Parts/Textarea";
import Input from "../Parts/Input";

function LivingInfo({ formData, setFormData, handleChange }) {
  const [wordCount, setWordCount] = useState(0);

  const handleWordCount = (e) => {
    const value = e.target.value;

    setWordCount(value.length);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>Fyll i följande uppgifter om dig själv</h2>
        <label>Namn</label>
        <Input placeholder="Fyll i ditt namn här" />
        {/* <input
          type="text"
          placeholder="Agneta Andersson"
          value={formData.fullName}
          onChange={handleChange("fullName")}
        ></input> */}
        <label>Personnummer</label>
        <Input placeholder="1950-01-01" />
        {/* <input
          type="number"
          placeholder="1900-01-01-1234"
          value={formData.birthday}
          onChange={(event) => {
            setFormData({ ...formData, birthday: event.target.value });
          }}
        ></input> */}
        <label>Kort beskrivning av dig sjäv</label>
        <Textarea placeholder="T.ex. Jag är en vänligen nybliven pensionär som älskar att dona i trädgården[...]" />
        {/* <textarea
          className={styles.textarea}
          rows="5"
          cols="40"
          placeholder="T.ex. Jag är en vänligen nybliven pensionär som älskar att dona i trädgården[...]"
          onChange={(e) => handleWordCount(e)}
        ></textarea> */}
        <small>{wordCount}/500</small>
        <h2>Vart ligger bostaden?</h2>
        <label>Adress</label>
        <input
          className={styles.GoogleInput}
          type="text"
          placeholder="Gibraltargatan 46"
          value={formData.address}
          onChange={(event) => {
            setFormData({ ...formData, address: event.target.value });
          }}
        ></input>
        <label>Ort</label>
        <input
          className={styles.GoogleInput}
          type="text"
          placeholder="Göteborg"
          value={formData.city}
          onChange={(event) => {
            setFormData({ ...formData, city: event.target.value });
          }}
        ></input>
        <label>Postnummer</label>
        <input
          className={styles.GoogleInput}
          type="number"
          placeholder="412 80"
          value={formData.zipCode}
          onChange={(event) => {
            setFormData({ ...formData, zipCode: event.target.value });
          }}
        ></input>
      </div>
      <iframe
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAX9b1yiux3Nmf3U4ENOvOF9-cg3rbqhcs
    &q=${formData.address},+${formData.city},+${formData.zipCode}`}
      ></iframe>
    </div>
  );
}

export default LivingInfo;
