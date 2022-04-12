import { React, useState } from "react";
import styles from "../styles/AdStyling/About.module.scss";
import Card from "../components/Parts/Card";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faHouseChimney } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.HeaderImgContainer}>
        <div className={styles.BackgroundImage}></div>
        <h1 className={styles.Title}>
          Hyra ut med Kollektiva
          <br />
          <span>- en tryggare uthyrning där vi är med dig hela vägen</span>
        </h1>
      </div>
      <div className={styles.BtnsContainer}>
        <button className={styles.btn}>
          <Link href="/signup">
            <a>Hyr ut bostad</a>
          </Link>
        </button>
      </div>
      <div className={styles.ArrowContainer}>
        <FontAwesomeIcon icon={faArrowDown} className={styles.DownArrow} />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.aboutWrapper}>
          <h2>Räkna ut hyran för din bostad</h2>
          <p>
            Genom att fylla i information om din bostad kan vi ge ett estimat på
            en skälig hyra. Hyran beräknas utifrån efterfrågan i ditt område,
            storlek och om boendet är möblerat eller ej.
          </p>
        </div>
        <div className={styles.calculateContainer}>
          <div className={styles.calculateRentWrapper}>
            <h2>Räkna ut din hyra</h2>
            <label>Vad hyr du ut?</label>
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
            <div className={styles.paymentWrapper}>
              <h3>Ungefärlig hyra</h3>
              <p>3500-4500kr</p>
              <button>Lägg ut din bostad</button>
            </div>
          </div>
        </div>
        <h2 className={styles.centerHeader}>Att hyra ut med kollektiva</h2>
        <div className={styles.cardContainer}>
          <Card
            header="Kollektiva hjälper dig att sätta hyra"
            text="Vi hjälper dig att sätta rätt hyra för din bostad utifrån läge, storlek och faciliteter. "
          />
          <Card
            header="Kollektiva hjälper dig att sätta hyra"
            text="Vi hjälper dig att sätta rätt hyra för din bostad utifrån läge, storlek och faciliteter. "
          />
          <Card
            header="Kollektiva hjälper dig att sätta hyra"
            text="Vi hjälper dig att sätta rätt hyra för din bostad utifrån läge, storlek och faciliteter. "
          />
          <Card
            header="Kollektiva hjälper dig att sätta hyra"
            text="Vi hjälper dig att sätta rätt hyra för din bostad utifrån läge, storlek och faciliteter. "
          />
          <Card
            header="Kollektiva hjälper dig att sätta hyra"
            text="Vi hjälper dig att sätta rätt hyra för din bostad utifrån läge, storlek och faciliteter. "
          />
          <Card
            header="Kollektiva hjälper dig att sätta hyra"
            text="Vi hjälper dig att sätta rätt hyra för din bostad utifrån läge, storlek och faciliteter. "
          />
        </div>
        <div className={styles.rentBtnContainer}>
          <button className={styles.rentBtn}>
            <Link href="/signup">
              <a>Hyr ut bostad</a>
            </Link>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
