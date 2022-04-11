import { React, useState } from "react";
import styles from "../../styles/AdStyling/Extras.module.scss";
import Textarea from "../Parts/Textarea";
import Radio from "../Parts/Radio";
import { BiImageAdd } from "react-icons/bi";

function Extras({ formData, setFormData }) {
  const [toggle, setToggle] = useState(false);

  const triggerToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.container}>
      <label className={styles.LabelTitle}>Ge ett namn till ditt boende</label>

      <Textarea
        placeholder="Förslag: Modernt familjevändligt hus med trädgård"
        value={formData.adName}
        onChange={(event) => {
          setFormData({ ...formData, adName: event.target.value });
        }}
      />
      <label className={styles.LabelTitle}>
        Beskriv kortfattat ditt boende
      </label>

      <Textarea
        placeholder="Förslag: Rymligt boende med plats för hela familjen i mysiga Lerum."
        value={formData.adDescription}
        onChange={(event) => {
          setFormData({ ...formData, adDescription: event.target.value });
        }}
      />
      <div className={styles.PictureContainer}>
        <h2>Ladda upp bilder</h2>
        <h3>
          Ladda upp <span>minst 5 bilder.</span> Tänk på att ta tydliga bilder
          som beskriver boendet väl.
        </h3>
        {/* <form>
          <input type="file" id="picture" name="filename" />
          <input type="submit" />
        </form> */}

        <div className={styles.ImgWrapperLarge}>
          <p>Klicka här för att ladda upp foto</p>
          <BiImageAdd className={styles.AddImgSvgLarge} />
        </div>
        <div className={styles.ImgWrapperContainer}>
          <div className={styles.ImgWrapper}>
            <BiImageAdd className={styles.AddImgSvg} />
          </div>
          <div className={styles.ImgWrapper}>
            <BiImageAdd className={styles.AddImgSvg} />
          </div>
          <div className={styles.ImgWrapper}>
            <BiImageAdd className={styles.AddImgSvg} />
          </div>
          <div className={styles.ImgWrapper}>
            <BiImageAdd className={styles.AddImgSvg} />
          </div>
        </div>

        <h2>Har du inga foton ännu?</h2>
        <Radio
          type="radio"
          id="no"
          name="pictures"
          value="no"
          for="no"
          text="Nej, jag skall ta bilder"
        />
        <Radio
          type="radio"
          id="help"
          name="pictures"
          value="help"
          for="help"
          text="Nej, jag vill ha hjälp med det."
        />
        <small>(Vi på Kollektiva kontaktar dig för handledning.)</small>
      </div>
    </div>
  );
}

export default Extras;
