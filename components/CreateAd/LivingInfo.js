import React from "react";
import styles from "../../styles/AboutLiving.module.scss";

function AboutLiving({ formData, setFormData }) {
  return (
    <div className={styles.container}>
      <h2>Om ditt boende</h2>
      <form className={styles.form}>
        <label className={styles.headline}>Storlek på boende</label>
        <input
          type="number"
          placeholder="Antal kvm"
          value={formData.houseSize}
          onChange={(event) => {
            setFormData({ ...formData, houseSize: event.target.value });
          }}
        />
        <div className={styles.checkboxContainer}>
          <label className={styles.headline}>
            Klicka i de rutor som stämmer
          </label>
          <div className={styles.checkboxes}>
            <input
              type="checkbox"
              id="hel_bostad"
              name="hel_bostad"
              value={formData.fullHouse}
              onChange={(event) => {
                setFormData({ ...formData, fullHouse: event.target.value });
              }}
            />
            <label for="hel_bostad">Hel bostad</label>
            <input
              type="checkbox"
              id="rum_i_bostad"
              name="rum_i_bostad"
              value={formData.roomInHouse}
              onChange={(event) => {
                setFormData({ ...formData, roomInHouse: event.target.value });
              }}
            />
            <label for="rum_i_bostad">Rum i bostad</label>
          </div>
          <div className={styles.checkboxContainer}>
            <label className={styles.headline}>Min bostad är:</label>
            <div className={styles.checkboxes}>
              <input
                type="checkbox"
                id="moblerad"
                name="moblerad"
                value={formData.furnished}
                onChange={(event) => {
                  setFormData({ ...formData, furnished: event.target.value });
                }}
              />
              <label for="moblerad">Möblerad</label>
              <input
                type="checkbox"
                id="omoblerad"
                name="omoblerad"
                value={formData.unFurnished}
                onChange={(event) => {
                  setFormData({ ...formData, unFurnished: event.target.value });
                }}
              />
              <label for="omoblerad">Omöblerad</label>
            </div>
          </div>
        </div>
        <label className={styles.headline}>Övrig information:</label>
        <textarea
          rows="5"
          cols="40"
          placeholder="Fin ustikt över dalen. Fiber är draget till lägenheten[...]"
          value={formData.otherInfo}
          onChange={(event) => {
            setFormData({ ...formData, otherInfo: event.target.value });
          }}
        ></textarea>
      </form>
    </div>
  );
}

export default AboutLiving;
