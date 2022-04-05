import React from "react";
import styles from "../../styles/AdStyling/TypeOfLiving.module.scss";

function TypeOfLiving() {
  return (
    <div className={styles.container}>
      <label>Storlek på boende</label>
      <input type="number" placeholder="Skriv i antal kvm"></input>
      <h3>Klicka i de rutor som stämmer</h3>
      {/* Göra om till radio-button? Så man bara har ett val och inte kan välja flera? */}
      <div>
        <input type="radio" id="house" name="living" value="house" />
        <label htmlFor="house">Hel bostad</label>
        <input type="radio" id="room" name="living" value="room" />
        <label htmlFor="room">Rum i bostad</label>
        <input type="radio" id="floor" name="living" value="floor" />
        <label htmlFor="floor">Egen våning i bostad</label>
        <input type="radio" id="shared" name="living" value="shared" />
        <label htmlFor="shared">Bostad på delad tomt</label>
      </div>
    </div>
  );
}

export default TypeOfLiving;
