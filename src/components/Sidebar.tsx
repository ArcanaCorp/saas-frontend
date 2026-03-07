"use client";

import Link from "next/link";

export default function Sidebar(){

  return(

    <div style={{
      width:"200px",
      height:"100vh",
      background:"#111",
      color:"#fff",
      padding:"20px"
    }}>

      <h2>Admin</h2>

      <ul>

        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link href="/users">Usuarios</Link>
        </li>

        <li>
          <Link href="/settings">Configuración</Link>
        </li>

      </ul>

    </div>

  )

}