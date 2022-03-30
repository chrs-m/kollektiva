import { React, useState } from "react";
import styles from "../../styles/AdStyling/About.module.scss";

function About({ formData, setFormData, handleChange }) {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.aboutWrapper}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            sociis dictum semper fermentum tellus vitae sed.
          </p>
          <button className={styles.btn}>Lägg ut din bostad</button>
          <button className={styles.btn}>Såhär fungerar det</button>
        </div>
        <div className={styles.calculateRentWrapper}>
          <h2>Räkna ut hyra för din bostad</h2>
          <label>Vad hyr du ut</label>
          <select name="calculate" id="calculate">
            <option value="room">Rum i bostad</option>
            <option value="apartment">Lägenhet</option>
            <option value="house">Hus</option>
          </select>
          <label>Ange storlek</label>
          <select name="size" id="size">
            <option value="20">20kvm</option>
            <option value="30">30kvm</option>
            <option value="40">40kvm</option>
          </select>
          <label>Antal rum</label>
          <select name="room" id="room">
            <option value="1">1 rum</option>
            <option value="2">2 rum</option>
            <option value="3">3 rum</option>
          </select>
          <label>Adress</label>
          <input type="text" placeholder="Gibraltargatan 46"></input>
          <label>Möblering</label>
          <select name="furniture" id="furniture">
            <option value="unfurnished">Omöblerad</option>
            <option value="furnished">Möblerad</option>
          </select>
        </div>
        <div className={styles.paymentWrapper}>
          <h3>Ungefärlig hyra:</h3>
          <p>3500-4500kr</p>
          <button>Skapa bostadsannons</button>
        </div>
        <div>
          <h2>Att hyra ut med kollektiva</h2>
          <div>
            <div>1</div>
            <p>Hejsansvejsan</p>
          </div>
          <div>
            <div>2</div>
            <p>Hejsansvejsan</p>
          </div>
          <div>
            <div>3</div>
            <p>Hejsansvejsan</p>
          </div>
          <div>
            <div>4</div>
            <p>Hejsansvejsan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
