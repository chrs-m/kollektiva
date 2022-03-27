import React, { useState } from "react";
import styles from "../../styles/Form.module.scss";
import AboutLiving from "../Signup/AboutLiving";
import OtherInfo from "../Signup/OtherInfo";
import PersonalInfo from "../Signup/PersonalInfo";
import SignUpInfo from "../Signup/SignUpInfo";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    fullName: "",
    birthday: "",
    about: "",
    houseSize: "",
    fullHouse: "",
    roomInHouse: "",
    furnished: "",
    unFurnished: "",
    otherInfo: "",
  });

  const FormTitles = [
    "Skapa ett konto",
    "Om dig",
    "Om bostaden",
    "Övrig information",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <AboutLiving formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.progressBarContainer}>
        <div
          className={styles.progressBar}
          style={{
            width:
              page === 0
                ? "33,3%"
                : page == 1
                ? "66,6%"
                : page == 2
                ? "66,6%"
                : "100%",
          }}
        ></div>
        <div className={styles.formContainer}>
          <div className={styles.header}>
            <h1>{FormTitles[page]}</h1>
          </div>
          <div classname="body">{PageDisplay()}</div>
          <div className={styles.buttons}>
            <button
              className={styles.btn}
              disabled={page == 0}
              onClick={() => {
                setPage((currentPage) => currentPage - 1);
              }}
            >
              Bakåt
            </button>
            <button
              className={styles.btn}
              //   disabled={page == FormTitles.length - 1}
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("form submitted!");
                  console.log(formData);
                } else {
                  setPage((currentPage) => currentPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Skicka in" : "Nästa"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
