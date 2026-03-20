"use client";

import Link from "next/link";

export default function Sidebar(){

  return(

    <aside style={{
      width:"250px",
      background:"#111",
      color:"white",
      padding:"20px"
    }}>

      <h2 style={{marginBottom:"30px"}}>Panel</h2>

      <nav style={{display:"flex", flexDirection:"column", gap:"15px"}}>

        <Link href="/dashboard">Dashboard</Link>

        <Link href="/users">Usuarios</Link>

        <Link href="/settings">Configuración</Link>

      </nav>

    </aside>

  )

}