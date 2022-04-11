import React, { useState } from "react";
import styles from "../../styles/Form.module.scss";
import About from "./About";
import Extras from "./Extras";
import LivingInfo from "./LivingInfo";
import Price from "./Price";
import Rentee from "./Rentee";
import Summary from "./Summary";
import TimePeriod from "./TimePeriod";
import TypeOfLiving from "./TypeOfLiving";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    birthday: "",
    about: "",
    address: "",
    city: "",
    zipCode: "",
    houseSize: "",
    fullHouse: "",
    roomInHouse: "",
    furnished: "",
    unFurnished: "",
    otherInfo: "",
    adultCounter: 0,
    childCounter: 0,
    bedCounter: 0,
    toiletCounter: 0,
    rentFrom: "",
    rentTo: "",
    priceCounter: 4500,
    adName: "",
    adDescription: "",
  });

  // handle field change
  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const FormTitles = [
    "About",
    "Hyr ut din bostad",
    "Vilken typ av boende hyr du ut?",
    "Hur många hyresgäster kan du ta emot?",
    "Hur länge vill du hyra ut?",
    "Bestäm ditt pris på hyran",
    "Slutför din annons genom att beskriva ditt boende och ladda upp bilder",
    "Bekräfta att allt stämmer",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <About formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return (
        <LivingInfo
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
        />
      );
    } else if (page === 2) {
      return (
        <TypeOfLiving
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
        />
      );
    } else if (page === 3) {
      return <Rentee formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return <TimePeriod formData={formData} setFormData={setFormData} />;
    } else if (page === 5) {
      return <Price formData={formData} setFormData={setFormData} />;
    } else if (page === 6) {
      return <Extras formData={formData} setFormData={setFormData} />;
    } else {
      return <Summary formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.animation}>
        <div className={styles.header}>
          {/* <div className={styles.titleWrapper}> */}

          {/* </div> */}
        </div>
        <div className={styles.formContainer}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>{FormTitles[page]}</h1>
          </div>
          <div className={styles.body}>{PageDisplay()}</div>
          <div className={styles.buttons}>
            <button
              className={styles.btnBack}
              disabled={page == 0}
              onClick={() => {
                setPage((currentPage) => currentPage - 1);
              }}
            >
              Tillbaka
            </button>
            <button
              className={styles.btnNext}
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
