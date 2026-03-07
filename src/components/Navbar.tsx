"use client";

import { useAuth } from "../context/AuthContext";

export default function Navbar(){

  const { logout } = useAuth();

  return(

    <div style={{
      width:"100%",
      padding:"10px",
      background:"#eee",
      display:"flex",
      justifyContent:"space-between"
    }}>

      <h3>Panel SaaS</h3>

      <button onClick={logout}>
        Cerrar sesión
      </button>

    </div>

  )

}