import { React, useState } from "react";
import styles from "../../styles/AdStyling/Extras.module.scss";

function Extras({ formData, setFormData }) {
  const [toggle, setToggle] = useState(false);

  const triggerToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.container}>
      <label>Ge ett namn till ditt boende</label>
      <input
        type="text"
        placeholder="Förslag: Modernt familjevändligt hus med trädgård"
        value={formData.adName}
        onChange={(event) => {
          setFormData({ ...formData, adName: event.target.value });
        }}
      ></input>
      <label>Beskriv kortfattat ditt boende</label>
      <textarea
        placeholder="Förslag: Rymligt boende med plats för hela familjen i mysiga Lerum."
        value={formData.adDescription}
        onChange={(event) => {
          setFormData({ ...formData, adDescription: event.target.value });
        }}
      ></textarea>
      <div className={styles.pictureContainer}>
        <h2>Ladda upp bilder</h2>
        <h3>
          Ladda upp minst 5 bilder. Tänk på att ta tydliga bilder som beskriver
          boendet väl.
        </h3>
        <form>
          <input type="file" id="picture" name="filename" />
          <input type="submit" />
        </form>

        <img></img>
        <img></img>
        <img></img>
        <img></img>
        <h3>Har du inga foton ännu?</h3>
        <input type="radio" id="no" name="pictures" value="no" />
        <label htmlFor="no">Nej jag ska ta bilder</label>
        <input type="radio" id="help" name="pictures" value="help" />
        <label htmlFor="help">Nej, jag vill ha hjälp med det</label>
        <small>Vi på Kollektiva kontaktar dig för handledning.</small>
      </div>
    </div>
  );
}

export default Extras;
