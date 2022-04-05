import { supabase } from "../lib/initSupabase.js";
import { useState } from "react";

export default function supabaseTest() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = {
      // name: name,
      email: email,
      password: password,
    };

    // const { data, error } = await supabase.from("users").insert([form]);

    const { data, error } = await supabase.auth.signIn({ ...form });
    console.log(supabase.auth.user());

    error ? console.log("error", error) : console.log("data", data);

    event.target.reset();

    setEmail("");
    setPassword("");
  };

  const handleDelete = async (event) => {
    await supabase.auth.api.deleteUser("");
  };

  return (
    <div className="">
      <form className="" onSubmit={onSubmit}>
        {/* <input
          type="text"
          className=""
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> */}

        <input
          type="text"
          className=""
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className=""
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="">Submit</button>
      </form>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
