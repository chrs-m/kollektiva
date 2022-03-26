import React from "react";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div>
      <h2>Skapa ett konto</h2>
      <label>Förnamn *</label>
      <input
        type="text"
        placeholder="Fyll i ditt föranmn"
        value={formData.firstName}
        onChange={(event) => {
          setFormData({ ...formData, firstName: event.target.value });
        }}
      />
      <label>Efternamn *</label>
      <input
        type="text"
        placeholder="Fyll i ditt efternamn"
        value={formData.lastName}
        onChange={(event) => {
          setFormData({ ...formData, lastName: event.target.value });
        }}
      />
      <label>Epost *</label>
      <input
        type="email"
        placeholder="Fyll i epostadress"
        value={formData.email}
        onChange={(event) => {
          setFormData({ ...formData, email: event.target.value });
        }}
      />
      <label>Lösenord *</label>
      <input
        type="password"
        placeholder="Välj lösenord"
        value={formData.password}
        onChange={(event) => {
          setFormData({ ...formData, password: event.target.value });
        }}
      />
      <div>
        <p>
          Har du redan ett konto? <a href="/">Loggin in här!</a>
        </p>
      </div>
    </div>
  );
}

export default SignUpInfo;
