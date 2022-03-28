import React from "react";
import LoginForm from "../components/Login/LoginForm";
import styles from "../styles/Login.module.scss";

function login() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}

export default login;
