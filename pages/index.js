import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
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
          <Link href="/about">
            <a>Sök bostad</a>
          </Link>
        </button>
        <button className={styles.btn}>
          <Link href="/about">
            <a>Hyr ut bostad</a>
          </Link>
        </button>
      </div>
      <div className={styles.ArrowContainer}>
        <a href="#main-section">
          <FontAwesomeIcon icon={faArrowDown} className={styles.DownArrow} />
        </a>
      </div>

      {/* MAIN SECTION STARTS HERE */}
      <div className={styles.MainSection} id="main-section">
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

      {/* LOCATION SECTION STARTS HERE */}
      <div className={styles.LocationSection}>
        <h2>Lediga bostäder just nu</h2>
        <div className={styles.LocationContainers}>
          <div className={`${styles.CityContainer} ${styles.Sthlm}`}>
            <h3>Stockholm</h3>
          </div>
          <div className={`${styles.CityContainer} ${styles.Gbg}`}>
            <h3>Göteborg</h3>
          </div>
          <div className={`${styles.CityContainer} ${styles.Malmo}`}>
            <h3>Malmö</h3>
          </div>
        </div>
        <div className={styles.BtnContainer}>
          <button className={styles.btn}>
            <Link href="#">
              <a>Hitta lediga bostäder</a>
            </Link>
          </button>
        </div>
      </div>

      {/* STORY SECTION STARTS HERE */}
      <div className={styles.StorySection}>
        <div className={styles.StoryTitle}>
          <h2>Berättelser</h2>
        </div>
        <div className={styles.StoryContainers}>
          <div
            className={`${styles.IndividualStoryContainer} ${styles.StoryOne}`}
          >
            <div className={styles.ImgWrapper}>
              <div
                className={`${styles.StoryImgContainer} ${styles.ImgOne}`}
              ></div>
            </div>
            <p>
              “När jag hyr ut min bostad vill jag att det ska kännas tryggt. Med
              Kollektiva behöver jag inte vara orolig för att något ska gå fel.”
            </p>
            <h3>Elsa</h3>
            <div className={styles.Bottom}></div>
          </div>
          <div
            className={`${styles.IndividualStoryContainer} ${styles.StoryTwo}`}
          >
            <div className={styles.ImgWrapper}>
              <div
                className={`${styles.StoryImgContainer} ${styles.ImgTwo}`}
              ></div>
            </div>
            <p>
              “När jag hyr ut min bostad vill jag att det ska kännas tryggt. Med
              Kollektiva behöver jag inte vara orolig för att något ska gå fel.”
            </p>
            <h3>Berit & Bertil</h3>
            <div className={styles.Bottom}></div>
          </div>
          <div
            className={`${styles.IndividualStoryContainer} ${styles.StoryThree}`}
          >
            <div className={styles.ImgWrapper}>
              <div
                className={`${styles.StoryImgContainer} ${styles.ImgThree}`}
              ></div>
            </div>

            <p>
              “När jag hyr ut min bostad vill jag att det ska kännas tryggt. Med
              Kollektiva behöver jag inte vara orolig för att något ska gå fel.”
            </p>
            <h3>Agneta</h3>
            <div className={styles.Bottom}></div>
          </div>
        </div>
        <div className={styles.StoryBtnContainer}>
          <button className={styles.btn}>
            <Link href="#">
              <a>Läs fler berättelser</a>
            </Link>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
