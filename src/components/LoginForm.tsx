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

        login(data.user, data.token);

        router.push("/dashboard");
      }

    } catch (error) {
      console.log("Error en login");
    }

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w m-auto card p4 rounded-md border flex flex-col gap-2 lg:w xl:w"
      style={{ "--w": "90%", "--w-lg": "60%", "--w-xl": "40%" } as CSSVars}
    >

      <h2>Login</h2>

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
        Iniciar sesión
      </button>

    </form>
  );
}