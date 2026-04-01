"use client";

import { useState } from "react";

export default function ClientForm({ onSubmit, initialData }: any){

  const [name, setName] = useState(initialData?.name || "");
  const [email, setEmail] = useState(initialData?.email || "");

  const handleSubmit = (e:any) => {
    e.preventDefault();

    onSubmit({
      name,
      email
    });
  };

  return(
    <form onSubmit={handleSubmit}>

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

      <button type="submit">Guardar</button>

    </form>
  );
}