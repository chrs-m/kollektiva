import React from "react";
import styles from "../../styles/Footer/Footer.module.scss";
import { BsInstagram, BsFacebook, BsLinkedin, BsPhone } from "react-icons/bs";
import { RiMapPin2Line } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <div className={styles.Container}>
      <div className={styles.IconsContainer}>
        <BsInstagram size="2rem" />
        <BsFacebook size="2rem" />
        <BsLinkedin size="2rem" />
      </div>
      <div className={styles.ContactInformationContainer}>
        <div className={`${styles.Contact} ${styles.ContactAdress}`}>
          <RiMapPin2Line size="2rem" />
          <p>Kollektiavägen 1, 123 45 Stockholm</p>
        </div>
        <div className={`${styles.Contact} ${styles.ContactEmail}`}>
          <HiOutlineMail size="2rem" />
          <a href="mailto:kollektiva@mail.se">kollektiva@mail.se</a>
        </div>
        <div className={`${styles.Contact} ${styles.ContactPhone}`}>
          <BsPhone size="2rem" />
          <a href="tel:010123456">010 12 34 56</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
