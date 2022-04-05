import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faHouseChimney } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.HeaderImgContainer}>
        <div className={styles.BackgroundImage}></div>
        <h1 className={styles.Title}>
          Välkommen till Kollektiva
          <br />
          <span>- En trygg andrahandsuthyrning</span>
        </h1>
      </div>
      <div className={styles.BtnsContainer}>
        <button className={styles.btn}>
          <Link href="/login">
            <a>Sök bostad</a>
          </Link>
        </button>
        <button className={styles.btn}>
          <Link href="/login">
            <a>Hyr ut bostad</a>
          </Link>
        </button>
      </div>
      <FontAwesomeIcon icon={faArrowDown} className={styles.DownArrow} />

      <div className={styles.MainSection}>
        <div className={styles.InfoContainer}>
          <FontAwesomeIcon
            icon={faHouseChimney}
            className={styles.HouseChimney}
          />
          <h2 className={styles.InfoHeader}>En trygg och säker plattform</h2>
          <p className={styles.InfoPara}>
            På Kollektiva görs regelbundna kontroller så att du, som
            hyresvärd/hryesgäst skall känna dig trygg under hela processen.
          </p>
        </div>
        <div className={styles.InfoContainer}>
          <FontAwesomeIcon
            icon={faHouseChimney}
            className={styles.HouseChimney}
          />
          <h2 className={styles.InfoHeader}>En trygg och säker plattform</h2>
          <p className={styles.InfoPara}>
            På Kollektiva görs regelbundna kontroller så att du, som
            hyresvärd/hryesgäst skall känna dig trygg under hela processen.
          </p>
        </div>
        <div className={styles.InfoContainer}>
          <FontAwesomeIcon
            icon={faHouseChimney}
            className={styles.HouseChimney}
          />
          <h2 className={styles.InfoHeader}>En trygg och säker plattform</h2>
          <p className={styles.InfoPara}>
            På Kollektiva görs regelbundna kontroller så att du, som
            hyresvärd/hryesgäst skall känna dig trygg under hela processen.
          </p>
        </div>
      </div>
    </div>
  );
}
