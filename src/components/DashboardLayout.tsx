"use client";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div style={{display:"flex", height:"100vh"}}>

      <Sidebar />

      <div style={{flex:1, display:"flex", flexDirection:"column"}}>

        <Navbar />

        <main style={{padding:"30px"}}>
          {children}
        </main>

      </div>

    </div>
  );
}