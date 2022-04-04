import React from "react";
import styles from "../../styles/AdStyling/TypeOfLiving.module.scss";
import buttonsvg from "../../assets/images/button-img.svg";
import plus from "../../assets/images/plus.svg";
import ManyOptionsBtn from "../ManyOptionsBtn";

function TypeOfLiving() {
  // Får inte ut bilderna
  //Flytta knappen lägg till text

  const HorizontalLine = () => (
    <hr style={{ backgroundColor: "#000", width: "100%" }} />
  );
  return (
    <div className={styles.container}>
      <label htmlFor="houseSize">Storlek på boende:</label> <br />
      <input
        type="number"
        placeholder="Skriv i antal kvm"
        id="houseSize"
        className={styles.houseSize}
      ></input>
      <h3>Jag hyr ut:</h3>
      <div className={styles.houseTypeContainer}>
        <ManyOptionsBtn text="Hel bostad" />
        <ManyOptionsBtn text="Rum i bostad" />
        <ManyOptionsBtn text="Egen våning i bostad" />
        <ManyOptionsBtn text="Bostad på delad tomt" />
      </div>
      <h3>Min bostad är:</h3>
      <div className={styles.furnishedContainer}>
        <ManyOptionsBtn text="Möblerad" />
        <ManyOptionsBtn text="Omöblerad" />
        <ManyOptionsBtn text="Delvis möblerad" />
      </div>
      <h3>Vill du addera eller förtydliga informationen ovan?</h3>
      <div className={styles.addTextContainer}>
        <textarea
          className={styles.addText}
          placeholder="Tex. Jag erbjuder rum i bostad med delad toalett och delat kök"
        ></textarea>
        <button className={styles.addTextBtn}>Lägg till text</button>
      </div>
      <h2>Vad erbjuder din bostad?</h2>
      <h3>Höjdpunkter</h3>
      <h4>Klicka i de rutor som stämmer:</h4>
      <div className={styles.extrasContainer}>
        <ManyOptionsBtn text="Centralt" />
        <ManyOptionsBtn text="Naturnära" />
        <ManyOptionsBtn text="Nära skola" />
        <ManyOptionsBtn text="Nära affär" />
        <ManyOptionsBtn text="Familjevänligt" />
        <ManyOptionsBtn text="Nära kollektivtrafik" />
      </div>
      <h3>Lägg till egna:</h3>
      <input
        type="text"
        placeholder="Expemelvis, nära hav"
        className={styles.facilities}
      >
        {/* <button>
            <img src={plus} />
          </button> */}
      </input>
      <h3>Faciliteter</h3>
      <h4>Klicka i de rutor som stämmer:</h4>
      <div className={styles.extrasContainer}>
        <ManyOptionsBtn text="Tvättmaskin" />
        <ManyOptionsBtn text="Diskmaskin" />
        <ManyOptionsBtn text="Torktumlare" />
        <ManyOptionsBtn text="Wifi" />
        <ManyOptionsBtn text="TV" />
        <ManyOptionsBtn text="Balkong" />
        <ManyOptionsBtn text="Parkering" />
        <ManyOptionsBtn text="Trädgård" />
        <ManyOptionsBtn text="Plats för cykel" />
      </div>
      <HorizontalLine />
      <div className={styles.addFacilities}>
        <h3>Lägg till egna faciliteter:</h3>
        <input
          type="text"
          placeholder="Expemelvis, badkar"
          className={styles.facilities}
        ></input>
      </div>
    </div>
  );
}

export default TypeOfLiving;
