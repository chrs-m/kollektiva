import Head from "next/head";
import Image from "next/image";
import { supabase } from "../lib/initSupabase.js";
import { useState } from "react";
import Form from "../components/Form.js";

export default function form() {
  return (
    <div>
      <Form />
    </div>
  );
}
