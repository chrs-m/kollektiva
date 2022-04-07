import { React, useState } from "react";
import styles from "../../styles/AdStyling/Price.module.scss";
import Input from "../../components/Parts/Input";
import Radio from "../Parts/Radio";

function Price({ formData, setFormData }) {
  const [counter, setCounter] = useState(2000);

  return (
    <div className={styles.container}>
      <h2>
        Baserat på inlagd information är rekommenderad hyra för ditt boende
        <span> 7500kr</span> i månaden
      </h2>
      <div className={styles.PriceContainer}>
        <button
          className={styles.btn}
          onClick={() => {
            if (formData.priceCounter > 2000) {
              formData.priceCounter -= 500;
              setFormData({ ...formData });
            }
          }}
        >
          -
        </button>

        {/* <h1 className="">{formData["priceCounter"]}</h1> */}
        <Input placeholder={"7500kr"} />
        <button
          className={styles.btn}
          onClick={() => {
            formData.priceCounter += 500;
            setFormData({ ...formData });
          }}
        >
          +
        </button>
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
