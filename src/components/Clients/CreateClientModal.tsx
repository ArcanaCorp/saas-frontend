"use client";

import ClientForm from "./ClientForm";

export default function CreateClientModal({ onClose, refresh }: any){

  const handleCreate = async (data:any) => {

    await fetch("http://localhost:4000/api/clients", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(data)
    });

    refresh();
    onClose();
  };

  return(
    <div className="modal">

      <h2>Crear Cliente</h2>

      <ClientForm onSubmit={handleCreate} />

      <button onClick={onClose}>Cerrar</button>

    </div>
  );
}