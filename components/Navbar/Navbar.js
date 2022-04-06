import { React, useState } from "react";
import Link from "next/link";
import styles from "../../styles/Navbar/Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  return (
    <nav className={styles.NavbarItems}>
      <Link href="/">
        <a className={styles.NavbarLogo}>Kollektiva</a>
      </Link>

      <div className={styles.MenuIcons}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faGlobe} />
        <Link href="/login">
          <a>
            <FontAwesomeIcon icon={faCircleUser} />
          </a>
        </Link>

        <FontAwesomeIcon
          onClick={handleClick}
          icon={state ? faXmark : faBars}
        />
      </div>
      <div className={styles.MenuWrapper}>
        <ul className={state ? styles.NavMenuActive : styles.NavMenu}>
          <div className={styles.PrimaryLinksWrapper}>
            {MenuItems.map((item, index) => {
              return (
                <div className={styles.PrimaryLinksWrapper}>
                  <li key={index}>
                    <a className={styles.NavLinksPrimary} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                </div>
              );
            })}
          </div>
          <div className={state ? styles.SubMenuActive : styles.SubMenu}>
            <div>
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
            </div>
          </div>
          <div className={state ? styles.SubMenuActive : styles.SubMenu}>
            <div>
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
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
