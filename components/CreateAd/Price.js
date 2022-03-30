import { React, useState } from "react";
import styles from "../../styles/AdStyling/Price.module.scss";

function Price({ formData, setFormData }) {
  const [counter, setCounter] = useState(2000);

  return (
    <div className={styles.container}>
      <h2>
        Baserat på inlagd information är rekommenderad hyra för ditt boende
        7500kr i månaden
      </h2>
      <button
        className="bg-slate-300 hover:bg-slate-400 rounded-md mt-10 px-2 hover:shadow-md"
        onClick={() => {
          formData.priceCounter += 500;
          setFormData({ ...formData });
        }}
      >
        +
      </button>
      <h1 className="text-white text-xl text-center mt-2">
        {formData["priceCounter"]}
      </h1>
      <button
        className="bg-slate-300 hover:bg-slate-400 rounded-md mt-10 px-2 hover:shadow-md"
        onClick={() => {
          if (formData.priceCounter > 2000) {
            formData.priceCounter -= 500;
            setFormData({ ...formData });
          }
        }}
      >
        -
      </button>
      <div className={styles.included}>
        <h2>Ingår el?</h2>
        <input type="radio" id="yes" name="electricity" value="yes" />
        <label for="yes">Ja</label>
        <input type="radio" id="no" name="electricity" value="no" />
        <label for="no">Nej</label>
      </div>
      <div className={styles.included}>
        <h2>Ingår vatten?</h2>
        <input type="radio" id="yes" name="water" value="yes" />
        <label for="yes">Ja</label>
        <input type="radio" id="no" name="water" value="no" />
        <label for="no">Nej</label>
      </div>
      <div className={styles.included}>
        <h2>Ingår hemförsäkring?</h2>
        <input type="radio" id="yes" name="incurance" value="yes" />
        <label for="yes">Ja</label>
        <input type="radio" id="no" name="incurance" value="no" />
        <label for="no">Nej</label>
      </div>
    </div>
  );
}

export default Price;
