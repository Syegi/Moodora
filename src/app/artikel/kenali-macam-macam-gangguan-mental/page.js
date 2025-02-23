import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

const { default: AppLayout } = require("../../layout/AppLayout")

export const metadata = {
    title: 'Kenali Macam-Macam Gangguan Kesehatan Mental - Moodora'
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
                        <span className='text-sm'>Jannuar</span>
                    </div>
                    <h1 className='text-4xl mt-5'>Kenali Macam-Macam Gangguan Kesehatan Mental</h1>
                    <div className="w-full h-[14rem] md:h-[20rem] xl:h-[35rem] relative overflow-hidden mt-5">
                        <Image src={'/assets/img/kenali-kesehatan-mental.png'} layout="responsive" alt="kenali-kesehatan-mental" width={200} height={200}/>
                    </div>
                    <div className='mt-10 text-justify'>
                        <p className='text-lg font-thin'>
                            Kesehatan mental adalah aspek penting dalam kehidupan manusia yang sering kali diabaikan. Gangguan kesehatan mental dapat mempengaruhi pola pikir, emosi, dan perilaku seseorang, sehingga menghambat fungsi sosial, pekerjaan, dan kehidupan sehari-hari. Oleh karena itu, penting bagi kita untuk mengenali berbagai jenis gangguan kesehatan mental agar dapat memberikan dukungan yang tepat kepada mereka yang membutuhkannya.
                        </p>
                        <h2 className="text-2xl font-medium mt-7">1. Depresi</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            Depresi adalah gangguan suasana hati yang ditandai dengan perasaan sedih yang berkepanjangan, kehilangan minat atau
                            kesenangan dalam aktivitas sehari-hari, serta perubahan pola tidur dan nafsu makan. Depresi dapat mempengaruhi kemampuan
                            seseorang untuk menjalani kehidupan sehari-hari dan membutuhkan penanganan medis serta dukungan psikologis.
                        </p>

                        <h2 className="text-2xl font-medium mt-7">2. Gangguan Kecemasan</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            Gangguan kecemasan meliputi berbagai kondisi yang menyebabkan seseorang merasa cemas atau takut secara berlebihan dan
                            tidak terkendali. Jenis-jenis gangguan kecemasan meliputi gangguan panik, fobia sosial, gangguan kecemasan umum, dan
                            gangguan obsesif-kompulsif (OCD).
                        </p>

                        <h2 className="text-2xl font-medium mt-7">3. Skizofrenia</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            Skizofrenia adalah gangguan mental yang serius dan kronis yang mempengaruhi cara seseorang berpikir, merasakan, dan
                            berperilaku. Gejala skizofrenia meliputi delusi, halusinasi, bicara yang tidak terorganisir, serta gangguan dalam fungsi
                            sosial dan pekerjaan.
                        </p>

                        <h2 className="text-2xl font-medium mt-7">4. Gangguan Bipolar</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            Gangguan bipolar ditandai dengan perubahan suasana hati yang ekstrem, mulai dari episode mania (kegembiraan berlebihan,
                            hiperaktif, dan impulsif) hingga episode depresi (kesedihan mendalam dan keputusasaan). Kondisi ini membutuhkan
                            perawatan jangka panjang dengan terapi dan obat-obatan.
                        </p>

                        <h2 className="text-2xl font-medium mt-7">5. Gangguan Makan</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            Gangguan makan seperti anoreksia nervosa, bulimia nervosa, dan binge eating disorder merupakan kondisi yang terkait
                            dengan kebiasaan makan yang tidak sehat dan memiliki dampak serius terhadap kesehatan fisik dan mental. Gangguan ini
                            sering kali dipicu oleh tekanan sosial dan masalah citra tubuh.
                        </p>

                        <h2 className="text-2xl font-medium mt-7">6. Gangguan Stres Pascatrauma (PTSD)</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            PTSD terjadi setelah seseorang mengalami atau menyaksikan peristiwa traumatis, seperti kecelakaan, kekerasan, atau
                            bencana alam. Gejala PTSD meliputi kilas balik traumatis, mimpi buruk, kecemasan berlebihan, dan penghindaran terhadap
                            situasi yang mengingatkan pada trauma tersebut.
                        </p>

                        <h2 className="text-2xl font-medium mt-7">7. Gangguan Kepribadian</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            Gangguan kepribadian melibatkan pola pikir dan perilaku yang tidak fleksibel dan menyebabkan kesulitan dalam interaksi
                            sosial. Beberapa jenis gangguan kepribadian meliputi borderline personality disorder, antisocial personality disorder,
                            dan narcissistic personality disorder.
                        </p>

                        <h2 className="text-2xl font-medium mt-7">Cara Mengatasi dan Mencegah Gangguan Kesehatan Mental</h2>
                        <ul className="list-disc list-inside mb-4">
                            <li><strong>Mencari Bantuan Profesional</strong> – Jika mengalami gejala gangguan mental, konsultasikan dengan psikolog atau psikiater.</li>
                            <li><strong>Menjaga Pola Hidup Sehat</strong> – Olahraga teratur, pola makan seimbang, tidur yang cukup, dan mengelola stres dapat membantu.</li>
                            <li><strong>Dukungan Sosial</strong> – Berbagi perasaan dengan keluarga atau teman dapat membantu mengurangi tekanan dan kesepian.</li>
                            <li><strong>Teknik Relaksasi</strong> – Meditasi, yoga, atau teknik pernapasan dalam dapat membantu mengatasi kecemasan dan stres.</li>
                        </ul>

                        <h2 className="text-2xl font-medium mt-7">Kesimpulan</h2>
                        <p>
                            Gangguan kesehatan mental adalah kondisi yang serius dan dapat mempengaruhi kehidupan seseorang secara signifikan. Dengan
                            mengenali gejala dan jenis gangguan mental, kita dapat lebih memahami kondisi ini dan memberikan dukungan kepada mereka
                            yang membutuhkan. Jika Anda atau orang terdekat mengalami gangguan mental, jangan ragu untuk mencari bantuan profesional
                            agar dapat mendapatkan perawatan yang tepat.
                        </p>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Artikel1;