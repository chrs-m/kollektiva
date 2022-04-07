import styles from "../styles/Form.module.scss";
import SignUpInfo from "../components/Signup/SignUpInfo.js";
import Navbar from "../components/Navbar/Navbar.js";
import Footer from "../components/Footer/Footer.js";

export default function form() {
  return (
    <div className={styles.container}>
      <Navbar />
      <SignUpInfo />
      <Footer />
    </div>
  );
}
