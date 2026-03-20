"use client";

import { useAuth } from "../context/AuthContext";

export default function Navbar(){

  const { logout } = useAuth();

  return(

    <div style={{
      height:"70px",
      borderBottom:"1px solid #ddd",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      padding:"0 30px"
    }}>

      <h2>Dashboard</h2>

      <button onClick={logout}>
        Cerrar sesión
      </button>

    </div>

  )

}