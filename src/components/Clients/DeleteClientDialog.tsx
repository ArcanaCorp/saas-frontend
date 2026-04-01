"use client";

export default function DeleteClientDialog({ client, onClose, refresh }: any){

  const handleDelete = async () => {

    await fetch(`http://localhost:4000/api/clients/${client.id}`, {
      method:"DELETE"
    });

    refresh();
    onClose();
  };

  return(
    <div className="modal">

      <h3>¿Eliminar cliente?</h3>

      <p>{client.name}</p>

      <button onClick={handleDelete}>Eliminar</button>
      <button onClick={onClose}>Cancelar</button>

    </div>
  );
}