import React from "react";

function AboutLiving({ formData, setFormData }) {
  return (
    <div>
      <h2>Om ditt boende</h2>
      <label>Storlek på boende</label>
      <input
        type="number"
        placeholder="Antal kvm"
        value={formData.houseSize}
        onChange={(event) => {
          setFormData({ ...formData, houseSize: event.target.value });
        }}
      />
      <label>Klicka i de rutor som stämmer</label>
      <input
        type="checkbox"
        id="hel_bostad"
        name="hel_bostad"
        value={formData.fullHouse}
        onChange={(event) => {
          setFormData({ ...formData, fullHouse: event.target.value });
        }}
      />
      <label for="hel_bostad">Hel bostad</label>
      <input
        type="checkbox"
        id="rum_i_bostad"
        name="rum_i_bostad"
        value={formData.roomInHouse}
        onChange={(event) => {
          setFormData({ ...formData, roomInHouse: event.target.value });
        }}
      />
      <label for="rum_i_bostad">Rum i bostad</label>
      <label>Min bostad är:</label>
      <input
        type="checkbox"
        id="moblerad"
        name="moblerad"
        value={formData.furnished}
        onChange={(event) => {
          setFormData({ ...formData, furnished: event.target.value });
        }}
      />
      <label for="moblerad">Möblerad</label>
      <input
        type="checkbox"
        id="omoblerad"
        name="omoblerad"
        value={formData.unFurnished}
        onChange={(event) => {
          setFormData({ ...formData, unFurnished: event.target.value });
        }}
      />
      <label for="omoblerad">Omöblerad</label>
      <label>Övrig information:</label>
      <textarea
        rows="5"
        cols="40"
        placeholder="Fin ustikt över dalen. Fiber är draget till lägenheten[...]"
        value={formData.otherInfo}
        onChange={(event) => {
          setFormData({ ...formData, otherInfo: event.target.value });
        }}
      ></textarea>
    </div>
  );
}

export default AboutLiving;
