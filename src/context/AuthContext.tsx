"use client";

import { createContext, useContext, useEffect, useState } from "react";

type User = {
  id?: number;
  name?: string;
  email?: string;
  role?: string;
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {

  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {

    const savedToken = localStorage.getItem("token");

    if (savedToken) {
      setToken(savedToken);
    }

  }, []);

  const login = (userData: User, tokenData: string) => {

    localStorage.setItem("token", tokenData);

    setUser(userData);
    setToken(tokenData);
  };

  const logout = () => {

    localStorage.removeItem("token");

    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {

  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }

  return context;
}