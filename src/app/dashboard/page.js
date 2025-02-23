"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import AppLayout from "../layout/AppLayout";

export default function Profile() {
    const { user, logout } = useContext(AuthContext);
    const router = useRouter();

    const login = (email, password) => {
        if (email === "moodora@mail.com" && password === "password123") {
        const userData = { email };
        localStorage.setItem("user_logged_in", JSON.stringify(userData));
        setUser(userData);
        router.replace("/dashboard");
        } else {
        return "Invalid email or password";
        }
    };
  return (
    <AppLayout>
        <title>Dashboard - Moodora</title>
        
        <div className="min-h-[85vh] flex flex-col justify-center items-center p-6">
            {/* Profile Section */}
            <div className="w-32 h-32 bg-gray-300 rounded-full flex justify-center items-center mb-4">
                <span className="text-4xl text-white">👤</span>
            </div>
            
            <h2 className="text-xl font-semibold">{user && user.email}</h2>
            <p className="text-gray-500">{user && user.email}</p>
            
            {/* Menu Items (Empty) */}
            <ul className="mt-6 w-full max-w-sm text-gray-700 space-y-4">
                <li className="flex items-center justify-between p-3 border rounded-md cursor-pointer">
                    <span>Akun</span>
                    <span>➡️</span>
                </li>
                <li className="flex items-center justify-between p-3 border rounded-md cursor-pointer">
                    <span>Tema</span>
                    <span>➡️</span>
                </li>
                <li className="flex items-center justify-between p-3 border rounded-md cursor-pointer">
                    <span>Bahasa</span>
                    <span>➡️</span>
                </li>
                <li className="flex items-center justify-between p-3 border rounded-md cursor-pointer">
                    <span>Privasi dan Keamanan</span>
                    <span>➡️</span>
                </li>
            </ul>
            
            <button 
                className="mt-6 w-full max-w-sm h-12 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600"
                onClick={logout}
            >
                Keluar
            </button>
        </div>
    </AppLayout>
  );
}
