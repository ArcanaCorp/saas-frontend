"use client";

import ClientForm from "./ClientForm";

export default function EditClientModal({ client, onClose, refresh }: any){

  const handleEdit = async (data:any) => {

    await fetch(`http://localhost:4000/api/clients/${client.id}`, {
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(data)
    });

    refresh();
    onClose();
  };

  return(
    <div className="modal">

      <h2>Editar Cliente</h2>

      <ClientForm
        onSubmit={handleEdit}
        initialData={client}
      />

      <button onClick={onClose}>Cerrar</button>

    </div>
  );
}