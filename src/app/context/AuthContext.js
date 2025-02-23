"use client";

import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Mengecek apakah user sudah login dari localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user_logged_in");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Fungsi untuk login
  const login = (email, password) => {
    if (email === "moodora@mail.com" && password === "password123") {
      const userData = { email };
      localStorage.setItem("user_logged_in", JSON.stringify(userData));
      setUser(userData);
      router.push("/dashboard");
      return null;
    } else {
      return "Email atau password salah";
    }
  };

  const logout = () => {
    localStorage.removeItem("user_logged_in");
    setUser(null);
    router.replace("/login");
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
