import React from "react";
import styles from "../../styles/AdStyling/TypeOfLiving.module.scss";

function TypeOfLiving() {
  return (
    <div className={styles.container}>
      <label>Storlek på boende</label>
      <input type="number" placeholder="Skriv i antal kvm"></input>
      <h3>Klicka i de rutor som stämmer</h3>
      <div>
        <input
          type="checkbox"
          id="wholehouse"
          name="wholehouse"
          value="wholehouse"
        />
        <label htmlFor="wholehouse">Hel bostad</label>
        <input type="checkbox" id="room" name="room" value="room" />
        <label htmlFor="room">Rum i bostad</label>
        <input
          type="checkbox"
          id="wholefloor"
          name="wholefloor"
          value="wholefloor"
        />
        <label htmlFor="wholefloor">Egen våning</label>
        <input
          type="checkbox"
          id="sharedplot"
          name="sharedplot"
          value="sharedplot"
        />
        <label htmlFor="sharedplot">Bostad på delad tomt</label>
      </div>
    </div>
  );
}

export default TypeOfLiving;
