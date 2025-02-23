import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

const { default: AppLayout } = require("../../layout/AppLayout")

export const metadata = {
    title: 'Tips untuk Menjaga Kesehatan Mental - Moodora'
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
                    <h1 className='text-4xl mt-5'>Tips untuk Menjaga Kesehatan Mental</h1>
                    <div className="w-full h-[14rem] md:h-[20rem] xl:h-[35rem] relative overflow-hidden mt-5">
                        <Image src={'/assets/img/kesehatan-mental.png'} layout="responsive" alt="kenali-kesehatan-mental" width={200} height={200}/>
                    </div>
                    <div className="mt-10 text-justify">
                        
                        
                        <p className="mb-4 text-lg font-thin mt-4">
                            Kesehatan mental adalah aspek penting dalam kehidupan yang sering kali diabaikan. Memiliki kondisi mental yang sehat tidak hanya membantu dalam menghadapi tantangan sehari-hari, tetapi juga meningkatkan kualitas hidup secara keseluruhan. Dengan tekanan hidup yang semakin meningkat, menjaga kesehatan mental menjadi hal yang sangat penting. Berikut adalah beberapa tips yang dapat membantu dalam menjaga keseimbangan emosional dan mental.
                        </p>
                        
                        <h2 className="text-2xl font-medium mt-7">1. Luangkan Waktu untuk Relaksasi</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            Stres adalah bagian dari kehidupan, tetapi cara kita mengelolanya sangat memengaruhi kesehatan mental. Salah satu cara utama dalam menjaga kesehatan mental adalah dengan meluangkan waktu untuk relaksasi. Aktivitas seperti meditasi, yoga, atau berjalan-jalan di alam terbuka dapat membantu menenangkan pikiran dan mengurangi stres. Selain itu, memiliki hobi atau melakukan aktivitas yang menyenangkan juga bisa menjadi bentuk terapi alami yang efektif dalam menjaga kesejahteraan mental.
                        </p>
                        
                        <h2 className="text-2xl font-medium mt-7">2. Menjaga Pola Hidup Sehat</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            Pola hidup sehat memiliki peran penting dalam mendukung kesehatan mental. Pola makan yang seimbang dengan asupan nutrisi yang cukup dapat membantu menjaga kestabilan suasana hati dan energi tubuh. Olahraga secara rutin tidak hanya bermanfaat bagi kesehatan fisik tetapi juga dapat merangsang produksi hormon endorfin yang berperan dalam meningkatkan suasana hati dan mengurangi kecemasan. Selain itu, tidur yang cukup sangat penting untuk memperbaiki kondisi mental dan emosional seseorang. Kurang tidur dapat meningkatkan risiko gangguan kecemasan dan depresi, sehingga mengatur pola tidur yang baik menjadi hal yang tidak boleh diabaikan.
                        </p>
                        
                        <h2 className="text-2xl font-medium mt-7">3. Bangun Hubungan Sosial yang Positif</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            Membangun hubungan sosial yang positif juga menjadi salah satu kunci utama dalam menjaga kesehatan mental. Memiliki teman, keluarga, atau komunitas yang mendukung dapat memberikan rasa nyaman dan mengurangi rasa kesepian. Berbicara dengan orang yang dipercaya mengenai perasaan dan masalah yang dihadapi dapat membantu meredakan tekanan mental dan menemukan solusi yang lebih baik. Jika seseorang merasa terbebani dengan masalah yang sulit diatasi sendiri, mencari bantuan profesional seperti psikolog atau konselor adalah langkah bijak yang dapat membantu memberikan perspektif baru dan strategi mengelola stres dengan lebih baik.
                        </p>
                        
                        <h2 className="text-2xl font-medium mt-7">4. Hindari Kebiasaan Buruk</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            Menghindari kebiasaan buruk seperti konsumsi alkohol berlebihan, merokok, atau penggunaan zat adiktif juga berkontribusi dalam menjaga kesehatan mental. Kebiasaan tersebut dapat memberikan efek negatif terhadap keseimbangan kimia dalam otak, yang pada akhirnya dapat memperburuk kondisi mental seseorang. Sebagai gantinya, mengembangkan pola pikir yang positif dan bersyukur atas hal-hal kecil dalam hidup dapat membantu menciptakan perasaan bahagia dan meningkatkan ketahanan mental. Menuliskan jurnal harian untuk mencatat hal-hal baik yang dialami setiap hari juga bisa menjadi cara sederhana untuk memperkuat pola pikir yang lebih optimis.
                        </p>
                        
                        <h2 className="text-2xl font-medium mt-7">5. Jangan Ragu Mencari Bantuan Profesional</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            Menjaga kesehatan mental adalah proses yang membutuhkan kesadaran dan usaha berkelanjutan. Jika mengalami tekanan yang berlebihan atau merasa tidak mampu mengatasi masalah sendiri, jangan ragu untuk mencari bantuan profesional. Psikolog atau terapis dapat memberikan solusi dan strategi yang lebih efektif untuk mengelola stres dan masalah emosional. Ingatlah bahwa kesehatan mental sama pentingnya dengan kesehatan fisik, dan menjaga keduanya adalah investasi terbaik untuk kualitas hidup yang lebih baik.
                        </p>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Artikel1;