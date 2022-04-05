import React from "react";
import LoginForm from "../components/Login/LoginForm";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Login.module.scss";

function login() {
  return (
    <div className={styles.container}>
      <Navbar />
      <LoginForm />
    </div>
  );
}

export default login;
