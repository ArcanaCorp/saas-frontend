"use client";

import { useState } from "react";

export default function SettingsPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSave = () => {

    alert("Configuración guardada");

  };

  return (

    <div style={{padding:"40px", maxWidth:"600px"}}>

      <h1>Configuración</h1>
      <p>Administra la configuración de tu cuenta</p>

      <div style={{marginTop:"20px"}}>

        <label>Nombre</label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width:"100%",
            padding:"10px",
            marginTop:"5px",
            marginBottom:"15px",
            border:"1px solid #ddd",
            borderRadius:"5px"
          }}
        />

        <label>Email</label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width:"100%",
            padding:"10px",
            marginTop:"5px",
            marginBottom:"20px",
            border:"1px solid #ddd",
            borderRadius:"5px"
          }}
        />

        <button
          onClick={handleSave}
          style={{
            background:"#2563eb",
            color:"white",
            padding:"10px 18px",
            borderRadius:"5px"
          }}
        >
          Guardar cambios
        </button>

      </div>

    </div>

  );

}