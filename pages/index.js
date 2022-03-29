import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <button>
        <Link href="/login">
          <a>Logga in här!</a>
        </Link>
      </button>
    </div>
  );
}
