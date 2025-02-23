import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

const { default: AppLayout } = require("../../layout/AppLayout")

export const metadata = {
    title: 'Dampak Media Sosial terhadap Kesehatan Mental - Moodora'
}

const Artikel1 = () => {
    return (
        <AppLayout>
            <div className="px-7 md:px-16 lg:px-32 xl:px-56 2xl:px-[30rem] my-5 md:my-14 pb-36">
                <Link href={'/artikel'} className="space-x-2 group">
                    <FontAwesomeIcon icon={faAnglesLeft} className="w-4"/>
                    <span className="group-hover:underline group-hover:text-pink-500 decoration-pink-500 duration-150">
                        Kembali ke kumpulan artikel
                    </span>
                </Link>
                <div className='mt-10'>
                    <div className='space-x-2 flex items-center'>
                        <span className='text-pink-500 text-sm'>18 Februari 2025 -</span> 
                        <span className='text-sm'>Della</span>
                    </div>
                    <h1 className='text-4xl mt-5'>Dampak Media Sosial terhadap Kesehatan Mental</h1>
                    <div className="w-full h-[14rem] md:h-[20rem] xl:h-[35rem] relative overflow-hidden mt-5">
                        <Image src={'/assets/img/media-sosial.png'} layout="responsive" alt="kenali-kesehatan-mental" width={200} height={200}/>
                    </div>
                    <div className="mt-10 text-justify">
                        <p className="mb-4 text-lg font-thin mt-4">
                            Media sosial telah menjadi bagian yang tidak terpisahkan dari kehidupan modern. Penggunaannya yang luas memungkinkan orang untuk tetap terhubung, berbagi informasi, dan mengekspresikan diri. Namun, penggunaan media sosial yang berlebihan juga dapat berdampak negatif terhadap kesehatan mental. Banyak penelitian menunjukkan bahwa konsumsi berlebihan terhadap platform media sosial dapat menyebabkan stres, kecemasan, hingga depresi.
                        </p>
                        
                        <h2 className="text-2xl font-medium mt-7">1. Efek Media Sosial terhadap Kesehatan Mental</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            Penggunaan media sosial sering kali dikaitkan dengan berbagai dampak negatif terhadap kesehatan mental. Salah satunya adalah meningkatnya tingkat kecemasan sosial akibat perbandingan dengan kehidupan orang lain yang terlihat lebih sempurna di dunia maya. Selain itu, penggunaan yang berlebihan juga dapat mengganggu pola tidur, menurunkan tingkat konsentrasi, dan menyebabkan kecanduan digital.
                        </p>
                        
                        <h2 className="text-2xl font-medium mt-7">2. Cara Menggunakan Media Sosial dengan Lebih Sehat</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            Untuk mengurangi dampak negatif dari media sosial, penting untuk menggunakannya secara bijak. Beberapa cara yang dapat dilakukan adalah membatasi waktu penggunaan media sosial setiap harinya, menyaring konten yang dikonsumsi agar lebih positif, serta lebih fokus pada interaksi sosial di dunia nyata. Selain itu, menjaga keseimbangan antara aktivitas online dan offline juga menjadi kunci dalam menjaga kesehatan mental.
                        </p>
                        
                        <h2 className="text-2xl font-medium mt-7">3. Menjaga Kesehatan Mental di Era Digital</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            Di era digital ini, kesadaran akan pentingnya kesehatan mental harus terus ditingkatkan. Pengguna media sosial perlu memahami bahwa apa yang mereka lihat di internet tidak selalu mencerminkan kenyataan. Oleh karena itu, penting untuk memiliki perspektif yang realistis serta tidak terjebak dalam tekanan sosial di dunia maya. Dengan menerapkan pola hidup yang lebih sehat, kita dapat memanfaatkan media sosial dengan cara yang lebih positif dan bermanfaat.
                        </p>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Artikel1;