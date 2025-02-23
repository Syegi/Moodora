import Image from "next/image";
import AppLayout from "../layout/AppLayout";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
    title: 'Artikel - Moodora'
}

const Artikel = () => {
    return (
        <AppLayout>
            <div className="px-7 md:px-16 xl:px-28 2xl:px-80 my-5 md:my-14">   
                <Link href={'/'} className="space-x-2 group">
                    <FontAwesomeIcon icon={faAnglesLeft} className="w-4"/>
                    <span className="group-hover:underline group-hover:text-pink-500 decoration-pink-500 duration-150">
                        Kembali ke beranda
                    </span>
                </Link>
                {/* article */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
                    {/* article 1 */}
                    <div className="w-full min-h-60 py-4 flex flex-col rounded-2xl">
                        <div className="w-full h-[24vh] relative overflow-hidden">
                        <Image src={'/assets/img/kenali-kesehatan-mental.png'} layout="responsive" alt="kenali-kesehatan-mental" width={200} height={200}/>
                        </div>
                        <div className="w-full mt-7">
                        <h1 className="text-lg font-semibold text-left">Kenali Macam-macam gangguan kesehatan mental</h1>
                        <p className="text-sm text-left">
                            Selalu kenali dan pelajari informasi mengenai kesehatan mental dan jiwa.
                        </p>
                        <div className="text-left mt-4">
                            <Link href={"/artikel/kenali-macam-macam-gangguan-mental"} className="underline text-sm hover:text-pink-500 duration-150">
                                Baca selengkapnya di sini.
                            </Link>
                        </div>
                        </div>
                    </div>
                    {/* article 2 */}
                    <div className="w-full min-h-60 py-4 flex flex-col rounded-2xl">
                        <div className="w-full h-[24vh] relative overflow-hidden">
                        <Image src={'/assets/img/kesehatan-mental.png'} layout="responsive" alt="kenali-kesehatan-mental" width={200} height={200}/>
                        </div>
                        <div className="w-full mt-7">
                        <h1 className="text-lg font-semibold text-left">Tips untuk menjaga kesehatan mental</h1>
                        <p className="text-sm text-left">
                            Stres adalah bagian dari kehidupan, tetapi cara kita mengelolanya sangat memengaruhi kesehatan mental. Luangkan waktu untuk relaksasi, meditasi, atau melakukan aktivitas yang menyenangkan agar pikiran tetap tenang...
                        </p>
                        <div className="text-left mt-4">
                            <Link href={"/artikel/tips-untuk-menjaga-kesehatan-mental"} className="underline text-sm hover:text-pink-500 duration-150">
                            Baca selengkapnya di sini.
                            </Link>
                        </div>
                        </div>
                    </div>
                    {/* article 3 */}
                    <div className="w-full min-h-60 py-4 flex flex-col rounded-2xl">
                        <div className="w-full h-[24vh] relative overflow-hidden">
                        <Image src={'/assets/img/habit.png'} layout="responsive" alt="kenali-kesehatan-mental" width={200} height={200}/>
                        </div>
                        <div className="w-full mt-7">
                        <h1 className="text-lg font-semibold text-left">Semua dari kebiasaan</h1>
                        <p className="text-sm text-left">
                            Ada kebiasaan baik (good habits) dan kebiasaan buruk (bad habits). Apakah kebiasaan ini dapat memengaruhi mood seseorang?
                        </p>
                        <div className="text-left mt-4">
                            <Link href={"/artikel/semua-dari-kebiasaan"} className="underline text-sm hover:text-pink-500 duration-150">
                                Baca selengkapnya di sini.
                            </Link>
                        </div>
                        </div>
                    </div>
                    {/* article 4 */}
                    <div className="w-full min-h-60 py-4 flex flex-col rounded-2xl">
                        <div className="w-full h-[24vh] relative overflow-hidden">
                            <Image src={'/assets/img/overthinking.png'} layout="responsive" alt="cara-mengatasi-overthinking" width={200} height={200}/>
                        </div>
                        <div className="w-full mt-7">
                            <h1 className="text-lg font-semibold text-left">Cara Mengatasi Overthinking</h1>
                            <p className="text-sm text-left">
                                Overthinking bisa membuat stres dan cemas. Ketahui cara mengelola pikiran agar lebih tenang dan fokus pada solusi.
                            </p>
                            <div className="text-left mt-4">
                                <Link href={"/artikel/cara-mengatasi-overthinking"} className="underline text-sm hover:text-pink-500 duration-150">
                                Baca selengkapnya di sini.
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* article 5 */}
                    <div className="w-full min-h-60 py-4 flex flex-col rounded-2xl">
                        <div className="w-full h-[24vh] relative overflow-hidden">
                            <Image src={'/assets/img/media-sosial.png'} layout="responsive" alt="dampak-media-sosial" width={200} height={200}/>
                        </div>
                        <div className="w-full mt-7">
                            <h1 className="text-lg font-semibold text-left">Dampak Media Sosial terhadap Kesehatan Mental</h1>
                            <p className="text-sm text-left">
                                Penggunaan media sosial yang berlebihan dapat berdampak negatif. Pelajari cara menggunakannya dengan lebih sehat.
                            </p>
                            <div className="text-left mt-4">
                                <Link href={"/artikel/dampak-media-sosial-terhadap-kesehatan-mental"} className="underline text-sm hover:text-pink-500 duration-150">
                                Baca selengkapnya di sini.
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* article 6 */}
                    <div className="w-full min-h-60 py-4 flex flex-col rounded-2xl">
                        <div className="w-full h-[24vh] relative overflow-hidden">
                            <Image src={'/assets/img/journaling.png'} layout="responsive" alt="manfaat-journaling" width={200} height={200}/>
                        </div>
                        <div className="w-full mt-7">
                            <h1 className="text-lg font-semibold text-left">Manfaat Journaling untuk Kesehatan Mental</h1>
                            <p className="text-sm text-left">
                                Menulis jurnal dapat membantu mengurangi stres dan meningkatkan kesadaran diri. Temukan manfaat lainnya di sini.
                            </p>
                            <div className="text-left mt-4">
                                <Link href={"/artikel/manfaat-journaling-untuk-kesehatan-mental"} className="underline text-sm hover:text-pink-500 duration-150">
                                Baca selengkapnya di sini.
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Artikel;