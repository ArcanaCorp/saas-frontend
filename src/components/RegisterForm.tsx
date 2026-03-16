"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function RegisterForm() {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {

      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nombre,
          email,
          password
        })
      });

      const data = await res.json();

      if (data.success) {
        router.push("/login");
      }

    } catch (error) {
      console.log("Error en registro");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w m-auto card p4 rounded-md border flex flex-col gap-2 lg:w xl:w"
      style={{ "--w": "90%", "--w-lg": "60%", "--w-xl": "40%" } as CSSVars}
    >

      <h2>Registrar</h2>

      <input
        type="text"
        placeholder="Nombre"
        className="input h"
        value={nombre}
        style={{ "--h": "40px" } as CSSVars}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="email"
        placeholder="Correo"
        className="input h"
        value={email}
        style={{ "--h": "40px" } as CSSVars}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        className="input h"
        value={password}
        style={{ "--h": "40px" } as CSSVars}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="btn btn-block btn-primary btn-rounded-md h"
        style={{ "--h": "40px" } as CSSVars}
      >
        Registrarse
      </button>

    </form>
  );
}