import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <button>
        <Link href="/login">
          <a>Logga in här!</a>
        </Link>
      </button>
    </div>
  );
}
