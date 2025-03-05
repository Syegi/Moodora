'use client';

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import AppLayout from "@/app/layout/AppLayout";

const DetailJurnal = () => {
    const router = useRouter();
    const params = useParams(); 
    const [journal, setJournal] = useState(null);

    useEffect(() => {
        if (!params || !params.id) return;

        if (typeof window !== "undefined") {
            const storedJournals = JSON.parse(localStorage.getItem("journals") || "[]");
            const journalIndex = parseInt(params.id, 10); // Konversi ke angka

            if (isNaN(journalIndex) || journalIndex < 0 || journalIndex >= storedJournals.length) {
                alert("Jurnal tidak ditemukan!");
                router.push("/jurnal");
                return;
            }

            setJournal(storedJournals[journalIndex]);
        }
    }, [params.id, router]);

    if (!journal) return <p>Memuat jurnal...</p>;

    return (
        <AppLayout>
            <title>jurnal - Moodora</title>
            
            <div className="min-h-[50vw] py-20 px-7 md:px-10 lg:px-16 xl:px-28 2xl:px-80">
                <h1 className="text-2xl font-semibold">{journal.title}</h1>
                <p className="text-sm text-gray-500 mb-5">
                    Dibuat pada: {new Date(journal.created_at).toLocaleString()}
                </p>
                
                {/* Menampilkan isi jurnal dalam format HTML */}
                <div className="border border-gray-300 p-5 rounded-md" dangerouslySetInnerHTML={{ __html: journal.content }} />

                <button 
                    onClick={() => router.push("/jurnal")}
                    className="mt-5 bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Kembali ke Daftar Jurnal
                </button>
            </div>
        </AppLayout>
    );
};

export default DetailJurnal;
