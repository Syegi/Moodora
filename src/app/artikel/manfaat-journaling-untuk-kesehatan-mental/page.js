import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

const { default: AppLayout } = require("../../layout/AppLayout")

export const metadata = {
    title: 'Manfaat Journaling untuk Kesehatan Mental - Moodora'
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
                        <span className='text-sm'>Jane</span>
                    </div>
                    <h1 className='text-4xl mt-5'>Manfaat Journaling untuk Kesehatan Mental</h1>
                    <div className="w-full h-[14rem] md:h-[20rem] xl:h-[35rem] relative overflow-hidden mt-5">
                        <Image src={'/assets/img/journaling.png'} layout="responsive" alt="kenali-kesehatan-mental" width={200} height={200}/>
                    </div>
                    <div className="mt-10 text-justify">
                        <h1 className="text-3xl font-bold mb-6">Manfaat Journaling untuk Kesehatan Mental</h1>
                        
                        <p className="mb-4 text-lg font-thin mt-4">
                            Menulis jurnal atau journaling adalah kebiasaan yang dapat memberikan banyak manfaat bagi kesehatan mental. 
                            Dengan mencatat perasaan, pengalaman, dan refleksi diri, seseorang dapat mengurangi stres, meningkatkan 
                            kesadaran diri, serta memahami pola pikir dan emosi mereka dengan lebih baik.
                        </p>
                        
                        <h2 className="text-2xl font-medium mt-7">1. Mengurangi Stres dan Kecemasan</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            Menulis jurnal secara rutin dapat menjadi cara efektif untuk melepaskan stres. Dengan menuangkan pikiran ke dalam 
                            tulisan, seseorang dapat mengurai masalah yang dihadapi, mengidentifikasi sumber stres, dan menemukan solusi 
                            yang lebih baik. Selain itu, journaling dapat membantu menenangkan pikiran dan mengurangi kecemasan.
                        </p>
                        
                        <h2 className="text-2xl font-medium mt-7">2. Meningkatkan Kesadaran Diri</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            Journaling memungkinkan seseorang untuk lebih mengenali diri mereka sendiri. Dengan mencatat pengalaman dan 
                            refleksi pribadi, seseorang dapat lebih memahami pola pikir, kebiasaan, dan emosi yang mereka alami sehari-hari.
                            Ini dapat membantu dalam pengembangan diri dan pengambilan keputusan yang lebih baik.
                        </p>
                        
                        <h2 className="text-2xl font-medium mt-7">3. Membantu Pengelolaan Emosi</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            Journaling juga dapat membantu dalam mengelola emosi dengan lebih sehat. Dengan menuliskan perasaan secara terbuka, 
                            seseorang dapat memahami penyebab dari perasaan tersebut dan menemukan cara yang lebih baik untuk meresponsnya. 
                            Hal ini dapat mencegah penumpukan emosi negatif yang dapat berdampak buruk pada kesehatan mental.
                        </p>
                        
                        <h2 className="text-2xl font-medium mt-7">4. Meningkatkan Fokus dan Produktivitas</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            Selain manfaat emosional, journaling juga dapat membantu meningkatkan fokus dan produktivitas. Dengan menuliskan 
                            tujuan, rencana, dan pencapaian, seseorang dapat lebih terorganisir dan memiliki gambaran yang lebih jelas mengenai 
                            apa yang ingin dicapai dalam hidup mereka.
                        </p>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Artikel1;