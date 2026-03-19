import { useAuth } from "@/context/AuthContext";

export default function Navbar() {

  const { logout } = useAuth();

  return (
    <button onClick={logout}>
      Cerrar sesión
    </button>
  );
}