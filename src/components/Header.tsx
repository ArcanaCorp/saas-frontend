"use client";

import { useRouter } from "next/navigation";

export default function Header(){

  const router = useRouter();

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

        <button onClick={() => router.push("/login")}>
          Iniciar sesión
        </button>

        <button
          onClick={() => router.push("/register")}
          style={{
            background:"#2563eb",
            color:"white",
            padding:"8px 14px",
            borderRadius:"5px"
          }}
        >
          Crear cuenta
        </button>

      </div>

    </header>

  )

}