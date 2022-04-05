import React from "react";
import styles from "../../styles/AdStyling/TypeOfLiving.module.scss";
import ManyOptionsBtn from "../Parts/ManyOptionsBtn";
import Input from "../Parts/Input";
import Textarea from "../Parts/Textarea";

function TypeOfLiving() {
  // Får inte ut bilderna
  //Flytta knappen lägg till text

  const HorizontalLine = () => (
    <hr style={{ backgroundColor: "#000", width: "100%" }} />
  );
  return (
    <div className={styles.container}>
      <label htmlFor="houseSize" className={styles.boldText}>
        Storlek på boende:
      </label>{" "}
      <br />
      <Input placeholder="Skriv i antal m2 " />
      <h3>Jag hyr ut:</h3>
      <div className={styles.houseTypeContainer}>
        <ManyOptionsBtn text="Hel bostad" />
        <ManyOptionsBtn text="Rum i bostad" />
        <ManyOptionsBtn text="Egen våning i bostad" />
        <ManyOptionsBtn text="Bostad på delad tomt" />
      </div>
      <h3 className={styles.boldText}>Min bostad är:</h3>
      <div className={styles.furnishedContainer}>
        <ManyOptionsBtn text="Möblerad" />
        <ManyOptionsBtn text="Omöblerad" />
        <ManyOptionsBtn text="Delvis möblerad" />
      </div>
      <h3>Vill du addera eller förtydliga informationen ovan?</h3>
      <div className={styles.addTextContainer}>
        <Textarea placeholder="Tex. Jag erbjuder rum i bostad med delad toalett och delat kök. " />
        <button className={styles.addTextBtn}>Lägg till text</button>
      </div>
      <h2>Vad erbjuder din bostad?</h2>
      <h3 className={styles.boldText}>Höjdpunkter</h3>
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
      <Input placeholder="Exempelvis, nära hav" />
      <h3 className={styles.boldText}>Faciliteter</h3>
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
      <div className={styles.addFacilities}>
        <h3>Lägg till egna:</h3>
        <Input placeholder="Exempelvis, garage" />
      </div>
      <HorizontalLine />
      <h3 className={styles.addInfo}>
        Vill du addera eller förtydliga informationen ovan?
      </h3>
      <div className={styles.addTextContainer}>
        <Textarea placeholder="Exempelvis, tillgång till balkong vid överenskommelse " />
        <button className={styles.addTextBtn}>Lägg till text</button>
      </div>
    </div>
  );
}

export default TypeOfLiving;
