"use client";

import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Head from "next/head";

const AppLayout = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout, isAuthenticated } = useContext(AuthContext);

    const toggleOffcanvas = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="flex flex-col justify-between">
                {/* header */}
                <header className="w-full h-24 bg-[#213cc5] flex items-center justify-between px-7 md:px-10 lg:px-16 xl:px-28 2xl:px-80 text-slate-100">
                    <Link href={'/'}>
                        <h1 className="text-3xl font-semibold text-cyan-300">
                            Moodora
                        </h1>
                    </Link>
                    <ul className="hidden md:flex items-center gap-x-8 text-sm">
                        <li>
                        <Link href={"/"} className="hover:text-pink-500 duration-150">
                            Beranda
                        </Link>
                        </li>
                        <li>
                        <Link href={"/artikel"} className="hover:text-pink-500 duration-150">
                            Artikel
                        </Link>
                        </li>
                        <li>
                        <Link href={"#"} className="hover:text-pink-500 duration-150">
                            Jurnal
                        </Link>
                        </li>
                        <li>
                        <Link href={"#"} className="hover:text-pink-500 duration-150">
                            Hubungi kami
                        </Link>
                        </li>
                    </ul>
                    {user ? (
                            <div className="hidden md:inline-block">
                                <Link href={'/dashboard'}>
                                    <button className="w-24 md:w-32 h-10 text-white bg-cyan-500 border border-cyan-500 hover:bg-transparent duration-150 text-sm">
                                        Dashboard
                                    </button>
                                </Link>
                            </div>
                        )
                        :
                        <div className="hidden md:flex items-center text-xs">
                            <div>
                                <Link href={'/login'}>
                                    <button className="w-24 md:w-16 lg:w-24 h-10 border border-cyan-500 hover:text-white hover:bg-cyan-500 duration-150 mr-2">
                                        Masuk
                                    </button>
                                </Link>
                                <Link href={'#'}>
                                    <button className="w-24 md:w-16 lg:w-24 h-10 text-white bg-cyan-500 border border-cyan-500 hover:bg-transparent duration-150">
                                        Daftar
                                    </button>
                                </Link>
                            </div>
                        </div>
                    }

                    <div className="md:hidden" id="offcanvas-button" onClick={toggleOffcanvas}>
                        <FontAwesomeIcon icon={faBars} className="w-5"/>
                    </div>
                    {/* offcanvas */}
                    <div className={`fixed z-[11] top-0
                    right-0 w-[40vh] h-full bg-white p-3 pt-5 duration-200 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} id="offcanvas">
                        <button className="w-9 h-9 bg-pink-500 border rounded flex justify-center items-center ml-auto" id="offcanvas-button" onClick={toggleOffcanvas}>
                            <FontAwesomeIcon icon={faX} className="w-3 text-slate-100"/>
                        </button>
                        <ul className="items-center gap-x-8 text-sm text-slate-800 space-y-4 mt-7">
                            <li>
                                <Link href={"/"} className="hover:text-pink-500 duration-150">
                                    <button className="w-full h-[7vh] border border-[#9eabeb]">    
                                        Beranda
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/artikel"} className="hover:text-pink-500 duration-150">
                                    <button className="w-full h-[7vh] border border-[#9eabeb]">    
                                        Artikel
                                    </button>
                                </Link>
                            </li>
                            <li>
                            <Link href={"#"} className="hover:text-pink-500 duration-150">
                                <button className="w-full h-[7vh] border border-[#9eabeb]">    
                                    Jurnal
                                </button>
                            </Link>
                            </li>
                            <li>
                                <Link href={"#"} className="hover:text-pink-500 duration-150">
                                    <button className="w-full h-[7vh] border border-[#9eabeb]">    
                                        Hubungi kami
                                    </button>
                                </Link>
                            </li>
                        </ul>
                        {user ? 
                            <div className="mt-5 pt-5 border-t">
                                <Link href={'/dashboard'}>
                                    <button className="w-full h-12 border border-pink-500 bg-pink-500 text-white hover:bg-cyan-500 duration-150 mr-2">
                                        Dashboard
                                    </button>
                                </Link>
                            </div>
                            :
                            <div className="mt-8 border-t pt-8 flex flex-col gap-y-4">
                                <Link href={'/login'}>
                                    <button className="w-full h-12 border border-pink-500 bg-pink-500 text-white hover:bg-cyan-500 duration-150 mr-2">
                                    Masuk
                                    </button>
                                </Link>
                                <Link href={'/login'}>
                                    <button className="w-full h-12 border border-[#213cc5] bg-[#213cc5] text-white hover:bg-cyan-500 duration-150 mr-2">
                                        Daftar
                                    </button>
                                </Link>
                            </div>
                        }
                    </div>
                    {/* offcanvas background */}
                    {isOpen && (
                        <div 
                            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10" 
                            onClick={toggleOffcanvas}
                        ></div>
                    )}
                </header>

                { children }

                {/* footer */}
                <footer className="w-full pt-16 bg-[#213cc5]">
                    <div className="mx-7 md:mx-16 xl:mx-20 2xl:mx-80 flex flex-wrap lg:justify-center gap-10 md:gap-16 2xl:gap-28 pt-10">
                        {/* Tentang Kami */}
                        <div>
                            <h3 className="text-lg font-medium mb-3 text-white">Tentang Kami</h3>
                            <ul className="space-y-2 text-slate-300">
                                <li><a href="#" className="hover:text-pink-500 duration-150">Tentang Kami</a></li>
                                <li><a href="#" className="hover:text-pink-500 duration-150">Tim Kami</a></li>
                                <li><a href="#" className="hover:text-pink-500 duration-150">Media</a></li>
                                <li><a href="#" className="hover:text-pink-500 duration-150">Kontak</a></li>
                            </ul>
                        </div>

                        {/* Sumber Daya */}
                        <div>
                            <h3 className="text-lg font-medium mb-3 text-white">Sumber Daya</h3>
                            <ul className="space-y-2 text-slate-300">
                                <li><a href="#" className="hover:text-pink-500 duration-150">Artikel Kesehatan Mental</a></li>
                                <li><a href="#" className="hover:text-pink-500 duration-150">Panduan Jurnal Mood</a></li>
                                <li><a href="#" className="hover:text-pink-500 duration-150">Tips Relaksasi</a></li>
                                <li><a href="#" className="hover:text-pink-500 duration-150">Komunitas</a></li>
                                <li><a href="#" className="hover:text-pink-500 duration-150">Rekomendasi Buku</a></li>
                            </ul>
                        </div>

                        {/* Bantuan & Dukungan */}
                        <div>
                            <h3 className="text-lg font-medium mb-3 text-white">Bantuan & Dukungan</h3>
                            <ul className="space-y-2 text-slate-300">
                                <li><a href="#" className="hover:text-pink-500 duration-150">Pusat Bantuan</a></li>
                                <li><a href="#" className="hover:text-pink-500 duration-150">FAQ</a></li>
                                <li><a href="#" className="hover:text-pink-500 duration-150">Hubungi Kami</a></li>
                                <li><a href="#" className="hover:text-pink-500 duration-150">Layanan Pengguna</a></li>
                            </ul>
                        </div>

                        {/* Kebijakan & Privasi */}
                        <div>
                            <h3 className="text-lg font-medium mb-3 text-white">Kebijakan & Privasi</h3>
                            <ul className="space-y-2 text-slate-300">
                                <li><a href="#" className="hover:text-pink-500 duration-150">Kebijakan Privasi</a></li>
                                <li><a href="#" className="hover:text-pink-500 duration-150">Syarat & Ketentuan</a></li>
                                <li><a href="#" className="hover:text-pink-500 duration-150">Hak & Keamanan Pengguna</a></li>
                                <li><a href="#" className="hover:text-pink-500 duration-150">Cookie Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="h-12 bg-slate-00 flex items-center justify-center text-center text-sm text-slate-300 mt-20">
                        &copy; {new Date().getFullYear()} Moodora. All rights reserved.
                    </div>
                </footer>
            </div>
        </>
    );
}

export default AppLayout