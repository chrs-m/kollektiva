import { supabase } from "../lib/initSupabase.js";
import { useState } from "react";

//const { data, error } = await supabase.from("posts").select("*");

export default function supabaseTest() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = {
      name: name,
      email: email,
    };

    console.log(form);
    const { data, error } = await supabase.from("users").insert([form]);

    error ? console.log("error", error) : console.log("data", data);
  };

  return (
    <div className="">
      <form className="" onSubmit={handleSubmit}>
        <input
          type="text"
          className=""
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          className=""
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="">Submit</button>
      </form>
    </div>
  );
}
