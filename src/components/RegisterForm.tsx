"use client";

import { useState } from "react";

export default function RegisterForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e:any) => {

    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/register", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        name,
        email,
        password
      })

    });

    const data = await res.json();

    console.log(data);

  };

  return (

    <form onSubmit={handleSubmit}>

      <h2>Registro</h2>

      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button type="submit">
        Registrarse
      </button>

    </form>

  );
}