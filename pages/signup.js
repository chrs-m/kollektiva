import Head from "next/head";
import Image from "next/image";
import { supabase } from "../lib/initSupabase.js";
import { useState } from "react";
import Form from "../components/Form.js";
import styles from "../styles/SignUp.module.scss";

export default function form() {
  return (
    <div className={styles.container}>
      <Form />
    </div>
  );
}
