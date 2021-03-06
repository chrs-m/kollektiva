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
              className={styles.MinusCircle}
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
              className={styles.PlusCircle}
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
              className={styles.MinusCircle}
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
              className={styles.PlusCircle}
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
              className={styles.MinusCircle}
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
              className={styles.PlusCircle}
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
              className={styles.MinusCircle}
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
              className={styles.PlusCircle}
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
        <h2>??r husdjur till??tet?</h2>
        <Radio id="yes" name="pets" value="yes" for="yes" text="Ja" />
        <Radio id="no" name="pets" value="no" for="no" text="Nej" />
      </div>
      <h3>Vill du addera eller f??rtydliga informationen ovan?</h3>
      <div className={styles.addTextContainer}>
        <Textarea placeholder="Tex. Hund ??r till??tet men ej ??vriga djur." />
        <button className={styles.addTextBtn}>L??gg till text</button>
      </div>
      <div className={styles.helpContainer}>
        <h2>??nskar du hj??lp fr??n din hyresg??st?</h2>
        <Radio id="yes" name="pets" value="yes" for="yes" text="Ja" />
        <Radio id="no" name="pets" value="no" for="no" text="Nej" />
      </div>
      <h2>Vad beh??ver du hj??lp med?</h2>
      <div className={styles.addTextContainer}>
        <Textarea placeholder="Tex. Jag vill g??rna ha hj??lp att handla, eller jag vill g??rna ha hj??lp att klippa gr??set." />
        <button className={styles.addTextBtn}>L??gg till text</button>
      </div>
      <h2>Hur ofta vill du ha hj??lp?</h2>
      <Input placeholder="En g??ng i veckan" />
      <div className={styles.rentContainer}>
        <h2>Kan du t??nka dig att reducera hyran vid hj??lp?</h2>
        <Radio id="yes" name="pets" value="yes" for="yes" text="Ja" />
        <Radio id="no" name="pets" value="no" for="no" text="Nej" />
      </div>
    </div>
  );
}

export default Rentee;
