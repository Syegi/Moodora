import { faAnglesRight, faCutlery, faFaceFrown, faFaceLaughBeam, faFaceMeh, faFaceSadTear, faSadCry, faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import AppLayout from "./layout/AppLayout";
import { faFaceSadCry } from "@fortawesome/free-regular-svg-icons";

export const metadata = {
  title: 'Beranda - Moodora'
}

export default function Home() {
  return (
    <>
      <div className="w-full mx-auto overflow-hidden">
        <AppLayout>
          {/* hero */}
          <div className="w-full h-[80vh] md:h-[45vh] xl:h-[30rem] 2xl:h-[40rem] overflow-hidden relative">
            <div className="z-[2] w-full h-full bg-black bg-opacity-10 absolute top-0 left-0 flex flex-col md:justify-center pt-[10vh] md:pt-0 px-7 md:px-20 xl:px-28 2xl:px-80">
              <div className="w-full 2xl:w-[60%]">
                <h1 className="text-3xl 2xl:text-5xl font-bold text-white">Mood Sehat, Aura Kuat</h1>
                <p className="text-xl text-neutral-100 mt-5">
                Tulis dan pahami mood harianmu dengan Moodora! Jurnal digital kami membantumu mengenali emosi, menemukan pola, dan mengelola perasaan dengan lebih baik. Temukan juga artikel inspiratif untuk mendukung kesehatan mentalmu.
                </p>
                <div className="mt-5 flex items-center gap-x-2">
                  <button className="bg-[#213cc5] border-2 border-[#213cc5] hover:bg-transparent w-52 h-14 rounded-sm grid place-content-center text-xs text-slate-100 duration-200">
                    Coba Moodora
                  </button>
                </div>
              </div>
            </div>
            <div className="z-[1] absolute top-0 2xl:-top-32 left-0 h-full w-full hidden md:inline-block">
              <Image src="/assets/img/hero.png" className="" alt="hero" layout="responsive" width={200} height={400}></Image>
            </div>
            <div className="z-[1] absolute top-0 2xl:-top-32 left-0 h-full w-full md:hidden">
              <Image src="/assets/img/hero-mobile.png" className="" alt="hero" layout="responsive" width={200} height={400}></Image>
            </div>
          </div>

          {/* Tentang kami */}
          <div className="w-full flex flex-col lg:flex-row items-center px-7 md:px-16 xl:px-28 2xl:px-80 py-20 lg:py-32 2xl:py-40 gap-x-10">
            <div className="w-full 2xl:w-[35vw] h-fit 2xl:h-[40vh] relative overflow-hidden">
              <Image src={'/assets/img/img-1.png'} layout="responsive" alt="kenali-kesehatan-mental" width={200} height={200}/>
            </div>
            <div className="w-full 2xl:w-[50%] md:mt-10 lg:mt-0">
              <span className="text-[#213cc5] text-xs">Moodora</span>
              <h1 className="text-3xl font-medium">Jaga kesehatan mentalmu bersama kami</h1>
              <div className="mt-7">
                <p className="text-justify">
                  Moodora adalah ruang aman untuk mengekspresikan perasaan dan merawat kesehatan mentalmu. Sebagai jurnal digital dan platform pendukung, Moodora membantumu memahami emosi, mengelola stres, dan membangun kebiasaan positif melalui refleksi harian.
                </p>
                <p className="mt-5 text-justify">
                  Dengan fitur pencatatan suasana hati, konten edukatif, serta komunitas suportif, Moodora mendukung perjalananmu menuju keseimbangan mental. Bersama Moodora, temukan cara terbaik untuk merawat diri dan jalani hidup dengan lebih tenang dan bahagia!
                </p>
              </div>
            </div>
          </div>

          {/* feeling */}
          <div className="w-full flex flex-col items-center justify-center px-10 py-28 bg-[#e3416d]">
              <h1 className="text-center text-xl font-medium text-slate-200">Bagaimana perasaanmu hari ini?</h1>
              <div className="mt-6 flex justify-center space-x-3 items-center">
                <button className="bg-[#213cc5] w-14 md:w-16 h-14 md:h-16 rounded-full grid place-content-center">
                  <FontAwesomeIcon icon={faFaceLaughBeam} className="w-10 text-xl text-white" style={{ width: "2rem", height: "2rem" }}/>
                </button>
                <button className="bg-[#213cc5] w-14 md:w-16 h-14 md:h-16 rounded-full grid place-content-center">
                  <FontAwesomeIcon icon={faSmile} className="w-10 text-xl text-white" style={{ width: "2rem", height: "2rem" }}/>
                </button>
                <button className="bg-[#213cc5] w-14 md:w-16 h-14 md:h-16 rounded-full grid place-content-center">
                  <FontAwesomeIcon icon={faFaceMeh} className="w-10 text-xl text-white" style={{ width: "2rem", height: "2rem" }}/>
                </button>
                <button className="bg-[#213cc5] w-14 md:w-16 h-14 md:h-16 rounded-full grid place-content-center">
                  <FontAwesomeIcon icon={faFaceFrown} className="w-10 text-xl text-white" style={{ width: "2rem", height: "2rem" }}/>
                </button>
                <button className="bg-[#213cc5] w-14 md:w-16 h-14 md:h-16 rounded-full grid place-content-center">
                  <FontAwesomeIcon icon={faFaceSadTear} className="w-10 text-xl text-white" style={{ width: "2rem", height: "2rem" }}/>
                </button>
              </div>

              <div className="flex flex-col space-y-2 text-center mt-10 text-slate-200">
                <p className="">
                  Catat perkembangan moodmu di jurnal harian sekarang!
                </p>
              </div>
          </div>

          {/* article */}
          <div className="px-7 md:px-16 xl:px-28 2xl:px-72 my-20 2xl:my-40 space-y-5">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl">Artikel</h1>
              <Link href={'/artikel'} className="group">
                <div className="flex space-x-2 items-center">
                  <span className="group-hover:underline group-hover:text-pink-500 decoration-pink-500 duration-200">Lihat selengkapnya</span>
                  <FontAwesomeIcon icon={faAnglesRight}/>
                </div>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* article 1 */}
              <button className="w-full min-h-60 py-4 flex flex-col rounded-2xl">
                <div className="w-full h-20vh relative">
                  <Image src={'/assets/img/kenali-kesehatan-mental.png'} layout="responsive" alt="kenali-kesehatan-mental" width={200} height={200}/>
                </div>
                <div className="w-full mt-7">
                  <h1 className="text-lg font-semibold text-left">Kenali Macam-macam gangguan kesehatan mental</h1>
                  <p className="text-sm text-left">
                    Selalu kenali dan pelajari informasi mengenai kesehatan mental dan jiwa.
                  </p>
                  <div className="text-left mt-4">
                    <Link href={"/artikel/kenali-macam-macam-gangguan-mental"} className="underline text-sm">
                      Baca selengkapnya di sini.
                    </Link>
                  </div>
                </div>
              </button>
              {/* article 2 */}
              <button className="w-full min-h-60 py-4 flex flex-col rounded-2xl">
                <div className="w-full h-20vh relative">
                  <Image src={'/assets/img/kesehatan-mental.png'} layout="responsive" alt="kenali-kesehatan-mental" width={200} height={200}/>
                </div>
                <div className="w-full mt-7">
                  <h1 className="text-lg font-semibold text-left">Tips untuk menjaga kesehatan mental</h1>
                  <p className="text-sm text-left">
                    Stres adalah bagian dari kehidupan, tetapi cara kita mengelolanya sangat memengaruhi kesehatan mental. Luangkan waktu untuk relaksasi, meditasi, atau melakukan aktivitas yang menyenangkan agar pikiran tetap tenang...
                  </p>
                  <div className="text-left mt-4">
                    <Link href={"/artikel/tips-untuk-menjaga-kesehatan-mental"} className="underline text-sm">
                      Baca selengkapnya di sini.
                    </Link>
                  </div>
                </div>
              </button>
              {/* article 3 */}
              <button className="w-full min-h-60 py-4 flex flex-col rounded-2xl">
                <div className="w-full h-20vh relative">
                  <Image src={'/assets/img/habit.png'} layout="responsive" alt="kenali-kesehatan-mental" width={200} height={200}/>
                </div>
                <div className="w-full mt-7">
                  <h1 className="text-lg font-semibold text-left">Semua dari kebiasaan</h1>
                  <p className="text-sm text-left">
                    Ada kebiasaan baik (good habits) dan kebiasaan buruk (bad habits). Apakah kebiasaan ini dapat memengaruhi mood seseorang?
                  </p>
                  <div className="text-left mt-4">
                    <Link href={"/artikel/semua-dari-kebiasaan"} className="underline text-sm">
                      Baca selengkapnya di sini.
                    </Link>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </AppLayout>
      </div>
    </>
  );
}
