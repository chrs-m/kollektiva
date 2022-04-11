import { React, useState } from "react";
import styles from "../../styles/AdStyling/Price.module.scss";
import Input from "../../components/Parts/Input";
import Radio from "../Parts/Radio";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

function Price({ formData, setFormData }) {
  const [counter, setCounter] = useState(2000);

  return (
    <div className={styles.container}>
      <h2>
        Baserat på inlagd information är rekommenderad hyra för ditt boende
        <span> {formData["priceCounter"]} kr</span> i månaden
      </h2>
      <div className={styles.PriceContainer}>
        <AiFillMinusCircle
          className={styles.MinusCircle}
          size="2.5rem"
          color="#f88e75"
          onClick={() => {
            formData.priceCounter -= 500;
            setFormData({ ...formData });
          }}
        />

        <h1 className="">{formData["priceCounter"]}</h1>
        {/* <Input placeholder={"7500kr"} /> */}
        <AiFillPlusCircle
          className={styles.PlusCircle}
          size="2.5rem"
          color="#f88e75"
          onClick={() => {
            formData.priceCounter += 500;
            setFormData({ ...formData });
          }}
        />
      </div>
      <div className={styles.included}>
        <h2>Ingår el?</h2>
        <Radio
          type="radio"
          id="yes"
          name="electricity"
          value="yes"
          for="yes"
          text="Ja"
          onClick={() => {
            formData.priceCounter += 300;
            setFormData({ ...formData });
          }}
        />
        <Radio
          type="radio"
          id="yes"
          name="electricity"
          value="yes"
          for="no"
          text="Nej"
        />
      </div>
      <div className={styles.included}>
        <h2>Ingår vatten?</h2>
        <Radio
          type="radio"
          id="yes"
          name="water"
          value="yes"
          for="yes"
          text="Ja"
          onClick={() => {
            formData.priceCounter += 200;
            setFormData({ ...formData });
          }}
        />
        <Radio
          type="radio"
          id="yes"
          name="water"
          value="yes"
          for="no"
          text="Nej"
        />
      </div>
      <div className={styles.included}>
        <h2>Ingår hemförsäkring?</h2>
        <Radio
          type="radio"
          id="yes"
          name="insurance"
          value="yes"
          for="yes"
          text="Ja"
          onClick={() => {
            formData.priceCounter += 250;
            setFormData({ ...formData });
          }}
        />
        <Radio
          type="radio"
          id="yes"
          name="insurance"
          value="yes"
          for="no"
          text="Nej"
        />
      </div>
    </div>
  );
}

export default Price;
