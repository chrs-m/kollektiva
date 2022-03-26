import React, { useState } from "react";
import styles from "../styles/Form.module.scss";
import AboutLiving from "./AboutLiving";
import OtherInfo from "./OtherInfo";
import PersonalInfo from "./PersonalInfo";
import SignUpInfo from "./SignUpInfo";

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
  });

  const FormTitles = ["Sign Up", "Personal Info", "About living", "Other"];

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
    <div className="form">
      <div className="progress-bar">
        <div
          style={{ width: page === 0 ? "33,3%" : page == 1 ? "66,6%" : "100%" }}
        ></div>
        <div className="form-container">
          <div classname="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div classname="body">{PageDisplay()}</div>
          <div classname="footer">
            <button
              disabled={page == 0}
              onClick={() => {
                setPage((currentPage) => currentPage - 1);
              }}
            >
              Previous
            </button>
            <button
              disabled={page == FormTitles.length - 1}
              onClick={() => {
                setPage((currentPage) => currentPage + 1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
