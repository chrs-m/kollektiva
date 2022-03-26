import { supabase } from "../lib/initSupabase.js";
import { useState } from "react";

export default function supabaseTest() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase.auth.signIn({ email });
    console.log(supabase.auth.user());

    error ? console.log("error", error) : console.log("data", data);
  };

  const handleDelete = async (event) => {
    await supabase.auth.api.deleteUser("8ced2995-30fa-498f-85d9-2260ad1f1167");
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
          type="password"
          className=""
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
