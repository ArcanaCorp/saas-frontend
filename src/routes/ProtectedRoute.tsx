"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }: any) {

  const { token } = useAuth();
  const router = useRouter();

  useEffect(() => {

    if (!token) {
      router.push("/login");
    }

  }, [token]);

  return children;
}