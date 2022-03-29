import React from "react";
import styles from "../../styles/PersonalInfo.module.scss";

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className={styles.container}>
      <h2>Lite mer om dig själv</h2>
      <form className={styles.form}>
        <label className={styles.label}>Namn</label>
        <input
          className={styles.input}
          type="text"
          placeholder="Agneta Andersson"
          value={formData.fullName}
          onChange={(event) => {
            setFormData({ ...formData, fullName: event.target.value });
          }}
        />
        <label className={styles.label}>Födelsedag</label>
        <input
          className={styles.input}
          type="date"
          placeholder="Födelsedag"
          value={formData.birthday}
          onChange={(event) => {
            setFormData({ ...formData, birthday: event.target.value });
          }}
        />
        <label className={styles.label}>Kort beskrivning av dig sjäv</label>
        <textarea
          className={styles.textarea}
          rows="5"
          cols="40"
          placeholder="T.ex. Jag är en vänligen nybliven pensionär som älskar att dona i trädgården[...]"
          value={formData.about}
          onChange={(event) => {
            setFormData({ ...formData, about: event.target.value });
          }}
        ></textarea>
      </form>
    </div>
  );
}

export default PersonalInfo;
