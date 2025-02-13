import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-[55vw] mx-auto">
      <header class="w-full h-20 flex items-center justify-between">
        <h1 class="text-3xl font-semibold text-cyan-500">
          Moodora
        </h1>
        <div className="flex items-center text-xs">
          <ul className="flex items-center gap-x-8">
            <li>
              <Link href={"#"}>
                Beranda
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                Hubungi Kami
              </Link>
            </li>
          </ul>
          <div className="w-[1px] h-4 bg-black mr-2 ml-6"></div>
          <div className="">
            <Link href={'#'}>
              <button className="w-16 h-8 hover:text-white hover:bg-cyan-600 duration-150 rounded-md mr-2">
                Masuk
              </button>
            </Link>
            <Link href={'#'}>
              <button className="w-16 h-8 text-white bg-cyan-600 duration-150 rounded-md">
                Daftar
              </button>
            </Link>
          </div>
        </div>
      </header>
      <div className="w-full h-[20rem] mt-5 overflow-hidden rounded-xl relative">
        <div className="z-[2] w-full h-full bg-black bg-opacity-10 absolute top-0 left-0 p-16">
          <h1 className="text-4xl font-bold text-white">Mood Sehat, Aura Kuat</h1>
          <p className="text-lg text-neutral-100 mt-5">
            Catat mood harianmu hanya di sini! Kamu juga bisa membaca artikel kami tentang perasaan dan menemukan wawasan baru untuk membantumu mengontrol mood dengan lebih baik.
          </p>
          <div className="mt-5 flex items-center gap-x-2">
            <button className="bg-yellow-300 w-36 h-10 rounded-sm grid place-content-center text-xs text-slate-700">
              Baca Artikel
            </button>
            <button className="bg-cyan-400 w-40 h-10 rounded-sm grid place-content-center text-xs text-slate-700">
              Catat Perasaan mu
            </button>
          </div>
        </div>
        <img src="https://img.pikbest.com/wp/202347/abstract-geometric-shape-pastel-colored-mockup-podium-shaped-background-for-product-display_9767310.jpg!bw700" className="z-[1] absolute -top-32 left-0 w-full"></img>
      </div>
    </div>
  );
}
