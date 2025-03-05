'use client';

import { useState, useEffect } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import AppLayout from "../layout/AppLayout";

const Jurnal = () => {
    const [journals, setJournals] = useState([]);

    // Ambil data dari localStorage saat komponen dimuat
    useEffect(() => {
        const storedJournals = JSON.parse(localStorage.getItem("journals") || "[]");
        setJournals(storedJournals);
    }, []);

    return (
        <AppLayout>
            <title>Jurnal - Moodora</title>
            
            <div className="py-20 px-7 md:px-10 lg:px-16 xl:px-28 2xl:px-80">
                <h1 className="text-2xl font-semibold">Jurnal Saya</h1>
                <hr className="my-2 mb-8"></hr>
                
                <div className="min-h-[50vw] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {/* Tombol untuk membuat jurnal baru */}
                    <Link href={'/jurnal/buat'}>
                        <button className="w-full h-40 border border-slate-800 rounded-md grid place-content-center hover:bg-neutral-100 duration-150">
                            <div className="w-16 h-16 rounded-full bg-neutral-100 grid place-content-center">
                                <FontAwesomeIcon icon={faPlus}/>
                            </div>
                        </button>
                    </Link>

                    {/* Menampilkan jurnal yang telah disimpan */}
                    {journals.map((journal, index) => (
                        <Link key={index} href={`/jurnal/detail/${index}`}>
                            <button className="w-full h-40 border border-slate-800 rounded-md flex flex-col items-start justify-start p-5 hover:bg-neutral-100 duration-150">
                                <div className="w-12 h-12 rounded-full bg-[#213cc5]"></div>
                                <h1 className="mt-2 font-semibold">{journal.title}</h1> 
                                <p className="text-neutral-600 text-xs">{new Date(journal.created_at).toLocaleDateString()}</p>
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
};

export default Jurnal;
