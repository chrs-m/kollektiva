import { redirect } from "next/dist/server/api-utils";
import { React, useState } from "react";
import { supabase } from "../../lib/initSupabase.js";
import styles from "../../styles/LoginForm.module.scss";
import Input from "../Parts/Input/";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (event) => {
    event.preventDefault();
    // const user = {
    //   email: email,
    //   password: password,
    // };

    // const { data, error } = await supabase.auth.signIn([user]);

    // error ? console.log("error", error) : console.log("data", data);

    window.location = "/ad/new";
  };

  return (
    <div className={styles.container}>
      <h1>Logga in</h1>
      <form className={styles.loginForm} onSubmit={signIn}>
        <div className={styles.loginFormField}>
          <label className={styles.loginFormLabel}>E-post</label>
          {/* <input
            className={styles.loginFormInput}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /> */}
          <Input placeholder="din@epost.se" />
        </div>
        <div className={styles.loginFormField}>
          <label className={styles.loginFormLabel}>Lösenord</label>
          {/* <input
            className={styles.loginFormInput}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> */}
          <Input placeholder="Ange ditt lösenord" />
        </div>
        <div className={styles.loginFormField}>
          <button className={styles.btn}>Logga in</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
