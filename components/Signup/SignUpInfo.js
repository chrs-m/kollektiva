import { React, useState } from "react";
import styles from "../../styles/SignUpInfo.module.scss";
import Link from "next/link";

function SignUpInfo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  return (
    <div className={styles.container}>
      <h2>Fyll i dina uppgifter</h2>
      <form className={styles.form}>
        <label className={styles.label}>Förnamn *</label>
        <input
          className={styles.input}
          type="text"
          placeholder="Fyll i ditt föranmn"
          value={formData.firstName}
          onChange={(event) => {
            setFormData({ ...formData, firstName: event.target.value });
          }}
        />
        <label className={styles.label}>Efternamn *</label>
        <input
          className={styles.input}
          type="text"
          placeholder="Fyll i ditt efternamn"
          value={formData.lastName}
          onChange={(event) => {
            setFormData({ ...formData, lastName: event.target.value });
          }}
        />
        <label className={styles.label}>Epost *</label>
        <input
          className={styles.input}
          type="email"
          placeholder="Fyll i epostadress"
          value={formData.email}
          onChange={(event) => {
            setFormData({ ...formData, email: event.target.value });
          }}
        />
        <label className={styles.label}>Lösenord *</label>
        <input
          className={styles.input}
          type="password"
          placeholder="Välj lösenord"
          value={formData.password}
          onChange={(event) => {
            setFormData({ ...formData, password: event.target.value });
          }}
        />
        <div>
          <p>
            Har du redan ett konto?{" "}
            <Link href="/login">
              <a>Logga in här!</a>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUpInfo;
