import React from "react";

function PersonalInfo({ formData, setFormData }) {
  return (
    <div>
      <h2>Om dig</h2>
      <labael>Namn</labael>
      <input
        type="text"
        placeholder="Agneta Andersson"
        value={formData.fullName}
        onChange={(event) => {
          setFormData({ ...formData, fullName: event.target.value });
        }}
      />
      <label>Födelsedag</label>
      <input
        type="date"
        placeholder="Födelsedag"
        value={formData.birthday}
        onChange={(event) => {
          setFormData({ ...formData, birthday: event.target.value });
        }}
      />
      <label>Kort beskrivning av dig sjäv</label>
      <textarea
        rows="5"
        cols="40"
        placeholder="T.ex. Jag är en vänligen nybliven pensionär som älskar att dona i trädgården[...]"
        value={formData.about}
        onChange={(event) => {
          setFormData({ ...formData, about: event.target.value });
        }}
      ></textarea>
    </div>
  );
}

export default PersonalInfo;
