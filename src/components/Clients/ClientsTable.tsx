"use client";

import { useEffect, useState } from "react";
import CreateClientModal from "./CreateClientModal";
import EditClientModal from "./EditClientModal";
import DeleteClientDialog from "./DeleteClientDialog";

export default function ClientsTable(){

  const [clients, setClients] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const [selectedClient, setSelectedClient] = useState<any>(null);
  const [action, setAction] = useState("");

  const fetchClients = async () => {
    const res = await fetch("http://localhost:4000/api/clients");
    const data = await res.json();
    setClients(data);
  };

  useEffect(()=>{
    fetchClients();
  },[]);

  return(
    <div>

      <h1>Clientes</h1>

      <button onClick={()=>setShowCreate(true)}>
        Crear Cliente
      </button>

      <table border={1}>

        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {clients.map((client:any)=>(
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>

                <button onClick={()=>{
                  setSelectedClient(client);
                  setAction("edit");
                }}>
                  Editar
                </button>

                <button onClick={()=>{
                  setSelectedClient(client);
                  setAction("delete");
                }}>
                  Eliminar
                </button>

              </td>
            </tr>
          ))}
        </tbody>

      </table>

      {showCreate && (
        <CreateClientModal
          onClose={()=>setShowCreate(false)}
          refresh={fetchClients}
        />
      )}

      {action === "edit" && (
        <EditClientModal
          client={selectedClient}
          onClose={()=>setAction("")}
          refresh={fetchClients}
        />
      )}

      {action === "delete" && (
        <DeleteClientDialog
          client={selectedClient}
          onClose={()=>setAction("")}
          refresh={fetchClients}
        />
      )}

    </div>
  );
}