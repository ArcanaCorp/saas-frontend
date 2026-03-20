"use client";

import Link from "next/link";
import { useAuth } from "../context/AuthContext";
export default function Header(){
  const { token } = useAuth();
  return(

    <header style={{
      width:"100%",
      padding:"15px 40px",
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      borderBottom:"1px solid #ddd",
      background:"#fff"
    }}>

      <h2 style={{fontWeight:"600"}}>SaaS Panel</h2>

      <div style={{display:"flex", gap:"10px"}}>

        <Link href="/login">
          <button>Iniciar sesión</button>
        </Link>

        <Link href="/register">
          <button style={{
            background:"#2563eb",
            color:"white",
            padding:"8px 14px",
            borderRadius:"5px"
          }}>
            Crear cuenta
          </button>
        </Link>

      </div>

    </header>

  )

}