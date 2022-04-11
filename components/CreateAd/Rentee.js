import { React, useState } from "react";
import styles from "../../styles/AdStyling/Rentee.module.scss";
import Textarea from "../Parts/Textarea";
import Input from "../Parts/Input";
import Radio from "../Parts/Radio";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

function Rentee({ formData, setFormData }) {
  const [counter, setCounter] = useState(0);

  const HorizontalLine = () => (
    <hr style={{ backgroundColor: "#0E5657", width: "100%" }} />
  );

  return (
    <div className={styles.container}>
      <div className={styles.counterContainer}>
        <div className={styles.singleCounter}>
          <label>Antal vuxna</label>
          <div className={styles.buttons}>
            <AiFillMinusCircle
              size="2.5rem"
              color="#f88e75"
              onClick={() => {
                if (formData.adultCounter > 0) {
                  formData.adultCounter -= 1;
                  setFormData({ ...formData });
                }
              }}
            >
              -
            </AiFillMinusCircle>
            <h2 className={styles.h2}>{formData.adultCounter}</h2>
            <AiFillPlusCircle
              size="2.5rem"
              color="#f88e75"
              onClick={() => {
                formData.adultCounter += 1;
                setFormData({ ...formData });
              }}
            >
              +
            </AiFillPlusCircle>
          </div>
        </div>
        <HorizontalLine />
        <div className={styles.singleCounter}>
          <label>Antal barn</label>
          <div className={styles.buttons}>
            <AiFillMinusCircle
              size="2.5rem"
              color="#f88e75"
              onClick={() => {
                if (formData.childCounter > 0) {
                  formData.childCounter -= 1;
                  setFormData({ ...formData });
                }
              }}
            >
              -
            </AiFillMinusCircle>
            <h2 className={styles.h2}>{formData.childCounter}</h2>
            <AiFillPlusCircle
              size="2.5rem"
              color="#f88e75"
              onClick={() => {
                formData.childCounter += 1;
                setFormData({ ...formData });
              }}
            >
              +
            </AiFillPlusCircle>
          </div>
        </div>
        <HorizontalLine />
        <div className={styles.singleCounter}>
          <label>Antal sovrum</label>
          <div className={styles.buttons}>
            <AiFillMinusCircle
              size="2.5rem"
              color="#f88e75"
              onClick={() => {
                if (formData.bedCounter > 0) {
                  formData.bedCounter -= 1;
                  setFormData({ ...formData });
                }
              }}
            >
              -
            </AiFillMinusCircle>
            <h2 className={styles.h2}>{formData.bedCounter}</h2>
            <AiFillPlusCircle
              size="2.5rem"
              color="#f88e75"
              onClick={() => {
                formData.bedCounter += 1;
                setFormData({ ...formData });
              }}
            >
              +
            </AiFillPlusCircle>
          </div>
        </div>
        <HorizontalLine />
        <div className={styles.singleCounter}>
          <label>Antal badrum</label>
          <div className={styles.buttons}>
            <AiFillMinusCircle
              size="2.5rem"
              color="#f88e75"
              onClick={() => {
                if (formData.toiletCounter > 0) {
                  formData.toiletCounter -= 1;
                  setFormData({ ...formData });
                }
              }}
            >
              -
            </AiFillMinusCircle>
            <h2 className={styles.h2}>{formData.toiletCounter}</h2>
            <AiFillPlusCircle
              size="2.5rem"
              color="#f88e75"
              onClick={() => {
                formData.toiletCounter += 1;
                setFormData({ ...formData });
              }}
            >
              +
            </AiFillPlusCircle>
          </div>
        </div>
      </div>
      <div className={styles.petsContainer}>
        <h2>Är husdjur tillåtet?</h2>
        <Radio id="yes" name="pets" value="yes" for="yes" text="Ja" />
        <Radio id="no" name="pets" value="no" for="no" text="Nej" />
      </div>
      <h3>Vill du addera eller förtydliga informationen ovan?</h3>
      <div className={styles.addTextContainer}>
        <Textarea placeholder="Tex. Hund är tillåtet men ej övriga djur." />
        <button className={styles.addTextBtn}>Lägg till text</button>
      </div>
      <div className={styles.helpContainer}>
        <h2>Önskar du hjälp från din hyresgäst?</h2>
        <Radio id="yes" name="pets" value="yes" for="yes" text="Ja" />
        <Radio id="no" name="pets" value="no" for="no" text="Nej" />
      </div>
      <h2>Vad behöver du hjälp med?</h2>
      <div className={styles.addTextContainer}>
        <Textarea placeholder="Tex. Jag vill gärna ha hjälp att handla, eller jag vill gärna ha hjälp att klippa gräset." />
        <button className={styles.addTextBtn}>Lägg till text</button>
      </div>
      <h2>Hur ofta vill du ha hjälp?</h2>
      <Input placeholder="En gång i veckan" />
      <div className={styles.rentContainer}>
        <h2>Kan du tänka dig att reducera hyran vid hjälp?</h2>
        <Radio id="yes" name="pets" value="yes" for="yes" text="Ja" />
        <Radio id="no" name="pets" value="no" for="no" text="Nej" />
      </div>
    </div>
  );
}

export default Rentee;
