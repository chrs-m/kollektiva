import { React, useState } from "react";
import styles from "../../styles/AdStyling/Rentee.module.scss";

function Rentee({ formData, setFormData }) {
  const [counter, setCounter] = useState(0);

  return (
    <div className={styles.container}>
      <label>Antal vuxna</label>
      <button
        className="bg-slate-300 hover:bg-slate-400 rounded-md mt-10 px-2 hover:shadow-md"
        onClick={() => {
          formData.adultCounter += 1;
          setFormData({ ...formData });
        }}
      >
        +
      </button>
      <h1 className="text-white text-xl text-center mt-2">
        {formData["adultCounter"]}
      </h1>
      <button
        className="bg-slate-300 hover:bg-slate-400 rounded-md mt-10 px-2 hover:shadow-md"
        onClick={() => {
          if (formData.adultCounter > 0) {
            formData.adultCounter -= 1;
            setFormData({ ...formData });
          }
        }}
      >
        -
      </button>
      <label>Antal barn</label>
      <button
        className="bg-slate-300 hover:bg-slate-400 rounded-md mt-10 px-2 hover:shadow-md"
        onClick={() => {
          formData.childCounter += 1;
          setFormData({ ...formData });
        }}
      >
        +
      </button>
      <h1 className="text-white text-xl text-center mt-2">
        {formData.childCounter}
      </h1>
      <button
        className="bg-slate-300 hover:bg-slate-400 rounded-md mt-10 px-2 hover:shadow-md"
        onClick={() => {
          if (formData.childCounter > 0) {
            formData.childCounter -= 1;
            setFormData({ ...formData });
          }
        }}
      >
        -
      </button>
    </div>
  );
}

export default Rentee;
