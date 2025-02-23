"use client";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import AppLayout from "../layout/AppLayout";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Login() {
  const { user, login, isAuthenticated } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthenticated()) {
      window.location.href = "/dashboard";
    }
  }, [user]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const errorMessage = await login(email, password);
    if (errorMessage) {
      setError(errorMessage);
    }
  };

  return (
    <AppLayout>
        <title>Masuk - Moodora</title>

        <div className="h-[85vh] flex items-center justify-center 2xl:bg-gray-100">
            <div className="bg-white p-8 rounded md:shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign in</h2>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                    type="email"
                    className="w-full p-2 border rounded mt-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                    type="password"
                    className="w-full p-2 border rounded mt-1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Login
                </button>
                </form>
            </div>
        </div>
    </AppLayout>
  );
}
