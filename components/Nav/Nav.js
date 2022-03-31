import React from "react";
import styles from "../../styles/Nav/nav.module.scss";
import menuIcon from "../../assets/icons/menu.svg";
import profileIcon from "../../assets/icons/profile.svg";
import searchIcon from "../../assets/icons/search.svg";
import Image from "next/image";

function Nav() {
  return (
    <section className={styles.navSection}>
      <div className={styles.navContainer}>
        <div className={styles.brand}>
          <a href="/">Kollektiva</a>
        </div>
        <nav className={styles.navigation}>
          <div className={styles.navMobile}>
            <a id="nav-toggle" href="#">
              <span></span>
            </a>
          </div>
          <div className={styles.navListWrapper}>
            <ul className={styles.navList}>
              <li>
                <a href="#">Hyr ut bostad</a>
              </li>
              <li>
                <a href="#">Sök bostad</a>
              </li>
              <li>
                <a href="#">Så fungerar Kollektiva</a>
              </li>
              <li>
                <a href="#">Berättelser</a>
              </li>
            </ul>
          </div>
          <div className={styles.icons}>
            <Image src={menuIcon} alt="menu" height={30} width={30} />
            <Image src={profileIcon} alt="profile" height={30} width={30} />
            <Image src={searchIcon} alt="search" height={30} width={30} />
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Nav;
