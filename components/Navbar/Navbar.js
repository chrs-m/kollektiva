import { React, useState } from "react";
import styles from "../../styles/Navbar/Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBars,
  faXmark,
  faMagnifyingGlass,
  faGlobe,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

import {
  MenuItems,
  SupportSubMenuItems,
  AboutUsSubMenuItems,
} from "./MenuItems";

function Navbar() {
  // [variableName/value, function/setter] = useState(defalt vaule)
  const [state, setState] = useState(false);

  const handleClick = () => {
    //toggles between states (true/false)
    setState(!state);
  };

  return (
    <nav className={styles.NavbarItems}>
      <h1 className={styles.NavbarLogo}>Kollektiva</h1>
      <div className={styles.MenuIcons}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faGlobe} />
        <FontAwesomeIcon icon={faCircleUser} />
        <FontAwesomeIcon
          onClick={handleClick}
          icon={state ? faXmark : faBars}
        />
      </div>
      <div className={styles.MenuWrapper}>
        <ul className={state ? styles.NavMenuActive : styles.NavMenu}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={styles.NavLinksPrimary} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
          <p>Om oss</p>
          {AboutUsSubMenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={styles.NavLinks} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
          <p>Stöd</p>
          {SupportSubMenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={styles.NavLinks} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
