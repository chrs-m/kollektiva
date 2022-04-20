import React from "react";
import LoginForm from "../components/Login/LoginForm";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Login.module.scss";

function login() {
  return (
    <div className={styles.container}>
      <Navbar />
      <LoginForm />
      {/* <Footer /> */}
    </div>
  );
}

export default login;
