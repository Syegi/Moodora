import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

const { default: AppLayout } = require("../../layout/AppLayout")

export const metadata = {
    title: 'Semua dari kebiasaan - Moodora'
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
                        <span className='text-sm'>Bryan</span>
                    </div>
                    <h1 className='text-4xl mt-5'>Semua dari kebiasaan</h1>
                    <div className="w-full h-[14rem] md:h-[20rem] xl:h-[35rem] relative overflow-hidden mt-5">
                        <Image src={'/assets/img/habit.png'} layout="responsive" alt="kenali-kesehatan-mental" width={200} height={200}/>
                    </div>
                    <div className='mt-10 text-justify'>
                        <p className='mb-4 text-lg font-thin mt-4'>
                            Kebiasaan adalah bagian dari kehidupan yang membentuk pola pikir dan emosi seseorang. Ada kebiasaan baik (good habits) yang
                            membawa dampak positif bagi kesehatan mental, dan ada pula kebiasaan buruk (bad habits) yang bisa memperburuk kondisi emosional.
                            Apa yang kita lakukan sehari-hari berkontribusi besar terhadap suasana hati dan kesejahteraan psikologis kita.
                        </p>
                        
                        <h2 className='text-2xl font-medium mt-7'>Dampak Kebiasaan Baik</h2>
                        <p className='mb-4 text-lg font-thin mt-4'>
                            Memiliki kebiasaan baik seperti tidur yang cukup, menjaga pola makan sehat, berolahraga secara teratur, serta meluangkan waktu
                            untuk relaksasi dan refleksi diri dapat meningkatkan kesehatan mental secara signifikan. Aktivitas-aktivitas ini membantu
                            menyeimbangkan kadar hormon dalam tubuh, mengurangi stres, serta meningkatkan rasa bahagia dan kepuasan hidup.
                        </p>
                        
                        <h2 className='text-2xl font-medium mt-7'>Bahaya Kebiasaan Buruk</h2>
                        <p className='mb-4 text-lg font-thin mt-4'>
                            Sebaliknya, kebiasaan buruk seperti terlalu banyak menghabiskan waktu di media sosial, kurang tidur, konsumsi makanan tidak sehat,
                            serta kurangnya aktivitas fisik dapat berdampak negatif terhadap kesehatan mental. Kebiasaan ini bisa menyebabkan peningkatan stres,
                            kecemasan, hingga depresi dalam jangka panjang.
                        </p>
                        
                        <h2 className='text-2xl font-medium mt-7'>Bagaimana Kebiasaan Mempengaruhi Mood?</h2>
                        <p className='mb-4 text-lg font-thin mt-4'>
                            Kebiasaan yang dilakukan secara konsisten akan membentuk pola pikir dan reaksi emosional seseorang terhadap situasi tertentu.
                            Misalnya, seseorang yang terbiasa bersyukur dan melihat sisi positif dalam setiap keadaan cenderung memiliki suasana hati yang
                            lebih stabil dibandingkan mereka yang sering berpikir negatif. Oleh karena itu, penting untuk menyadari kebiasaan kita dan mulai
                            mengubah pola hidup menjadi lebih sehat demi kesehatan mental yang lebih baik.
                        </p>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Artikel1;