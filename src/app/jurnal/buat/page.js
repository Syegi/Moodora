'use client';

import AppLayout from "@/app/layout/AppLayout";
import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// Lazy load Toast UI Editor agar tidak error di Next.js (karena SSR)
const Editor = dynamic(() => {
    import("@toast-ui/editor/dist/toastui-editor.css");
    return import("@toast-ui/react-editor").then((mod) => mod.Editor);
}, { ssr: false });

const BuatJurnal = () => {
    const [title, setTitle] = useState('');
    const editorRef = useRef(null);

    // Ambil data terakhir yang disimpan (agar tidak hilang jika halaman direfresh)
    useEffect(() => {
        const savedJournals = JSON.parse(localStorage.getItem("journals") || "[]");
        if (savedJournals.length > 0) {
            setTitle(savedJournals[0].title);
            editorRef.current?.getInstance().setHTML(savedJournals[0].content);
        }
    }, []);

    const handleSave = () => {
        if (!title.trim()) {
            alert("Judul jurnal tidak boleh kosong!");
            return;
        }

        if (!editorRef.current || !editorRef.current.getInstance) {
            alert("Editor belum siap. Coba lagi!");
            return;
        }

        const content = editorRef.current.getInstance().getHTML();
        const newEntry = {
            title,
            created_at: new Date().toISOString(),
            content
        };

        // Ambil data yang sudah ada di localStorage
        const existingJournals = JSON.parse(localStorage.getItem("journals") || "[]");
        const updatedJournals = [newEntry, ...existingJournals];

        // Simpan kembali ke localStorage
        localStorage.setItem("journals", JSON.stringify(updatedJournals));

        alert("Jurnal berhasil disimpan!");
        setTitle('');
        editorRef.current.getInstance().setHTML('');
    };

    return (
        <AppLayout>
            <title>Buat Jurnal - Moodora</title>

            <div className="py-10 lg:py-20 px-7 md:px-10 lg:px-16 xl:px-28 2xl:px-96">
                <Link href={'/jurnal'}>
                    <div className="flex items-center space-x-2 hover:text-[#4261fd] duration-150">
                        <FontAwesomeIcon icon={faArrowLeft}/>
                        <span className="text-sm">
                            Kembali
                        </span>
                    </div>
                </Link>
                <div className="bg-[#798ce9] w-full h-14 flex items-center px-5 rounded-md text-white mt-3">
                    <h1 className="text-2xl font-semibold">Buat Jurnal</h1>
                </div>
                <div className="min-h-[50vw]">
                    <form className="w-full grid grid-cols-1 gap-5 mt-10">
                        <div>
                            <span>Judul</span>
                            <input
                                className="w-full h-12 border border-slate-400 rounded px-2"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Judul jurnal kamu"
                            />
                        </div>
                        <div>
                            <span>Isi Jurnal</span>
                            <Editor
                                ref={editorRef}
                                initialValue="<p></p>"
                                placeholder="Tulis jurnal di sini"
                                previewStyle="tab"
                                height="300px"
                                initialEditType="wysiwyg"
                                useCommandShortcut={true}
                                toolbarItems={[
                                    ["bold", "italic", "strike"],
                                    ["ul", "ol"],
                                    ["table", "image", "link"],
                                    ["code", "quote"]
                                ]}
                            />
                        </div>
                        <button
                            type="button"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                            onClick={handleSave}
                        >
                            Simpan Jurnal
                        </button>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
};

export default BuatJurnal;