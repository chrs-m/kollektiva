import { supabase } from "../lib/initSupabase.js";
import { useState } from "react";
import styles from "../styles/Form.module.scss";
import SignUpInfo from "../components/Signup/SignUpInfo.js";

export default function form() {
  return (
    <div className={styles.container}>
      <SignUpInfo />
    </div>
  );
}
