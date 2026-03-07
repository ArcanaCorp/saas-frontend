"use client";

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {

      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (data.token) {
        login(data.token);
        router.push("/dashboard");
      }

    } catch (error) {
      console.log("Error en login");
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <h2>Login</h2>

      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">
        Iniciar sesión
      </button>

    </form>
  );
}