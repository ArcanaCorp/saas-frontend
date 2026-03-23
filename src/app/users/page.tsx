"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export default function UsersPage() {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {

    // Datos falsos para probar sin backend
    const fakeUsers: User[] = [
      { id: 1, name: "Bryan", email: "bryan@email.com", role: "admin" },
      { id: 2, name: "Carlos", email: "carlos@email.com", role: "user" },
      { id: 3, name: "Ana", email: "ana@email.com", role: "user" }
    ];

    setUsers(fakeUsers);

  }, []);

  return (

    <div style={{padding:"40px"}}>

      <h1>Usuarios</h1>
      <p>Lista de usuarios del sistema</p>

      <table style={{
        width:"100%",
        marginTop:"20px",
        borderCollapse:"collapse"
      }}>

        <thead>

          <tr style={{background:"#f4f4f4"}}>

            <th style={{padding:"10px"}}>ID</th>
            <th style={{padding:"10px"}}>Nombre</th>
            <th style={{padding:"10px"}}>Email</th>
            <th style={{padding:"10px"}}>Rol</th>

          </tr>

        </thead>

        <tbody>

          {users.map((user) => (

            <tr key={user.id} style={{borderBottom:"1px solid #ddd"}}>

              <td style={{padding:"10px"}}>{user.id}</td>
              <td style={{padding:"10px"}}>{user.name}</td>
              <td style={{padding:"10px"}}>{user.email}</td>
              <td style={{padding:"10px"}}>{user.role}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}