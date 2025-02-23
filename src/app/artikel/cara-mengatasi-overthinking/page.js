import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

const { default: AppLayout } = require("../../layout/AppLayout")

export const metadata = {
    title: 'Cara mengatasi overthinking - Moodora'
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
                    <h1 className='text-4xl mt-5'>Cara mengatasi overthinking</h1>
                    <div className="w-full h-[14rem] md:h-[20rem] xl:h-[35rem] relative overflow-hidden mt-5">
                        <Image src={'/assets/img/overthinking.png'} layout="responsive" alt="kenali-kesehatan-mental" width={200} height={200}/>
                    </div>
                    <div className="mt-10 text-justify">
                        <p className="mb-4 text-lg font-thin mt-4">
                            Overthinking bisa membuat stres dan cemas, menghambat produktivitas, serta menurunkan kualitas hidup. Pikiran yang berputar-putar tanpa solusi hanya akan menambah tekanan mental. Oleh karena itu, penting untuk memahami cara mengelola pikiran agar lebih tenang dan fokus pada solusi. Berikut adalah beberapa langkah yang dapat membantu mengatasi overthinking secara efektif.
                        </p>
                        <h2 className="text-2xl font-medium mt-7">1. Sadari Pola Pikiran Berlebihan</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            Langkah pertama dalam mengatasi overthinking adalah menyadari kapan Anda mulai terlalu banyak berpikir. Pikiran yang berulang-ulang sering kali muncul tanpa disadari dan terus berkembang hingga menimbulkan kecemasan berlebihan. Cobalah untuk mengenali tanda-tanda awal, seperti kesulitan tidur karena memikirkan sesuatu secara terus-menerus atau merasa cemas tanpa alasan yang jelas. Dengan menyadari pola ini, Anda bisa lebih cepat mengambil langkah untuk menghentikannya sebelum semakin parah. Kesadaran diri adalah kunci utama dalam mengendalikan pikiran agar tidak berlebihan.
                        </p>
                        <h2 className="text-2xl font-medium mt-7">2. Alihkan Fokus ke Tindakan</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            Daripada terjebak dalam pikiran yang berulang-ulang, alihkan fokus ke tindakan nyata. Pikiran yang berlebihan sering kali hanya berputar tanpa solusi, sehingga mengambil tindakan nyata bisa menjadi cara efektif untuk mengatasinya. Buat daftar tugas atau langkah konkret yang bisa dilakukan untuk mengatasi permasalahan yang Anda pikirkan. Selain itu, cobalah untuk melakukan aktivitas yang bisa mengalihkan pikiran, seperti berolahraga, membaca buku, atau mengerjakan hobi yang Anda sukai. Dengan begitu, Anda tidak hanya meredakan kecemasan tetapi juga membuat progres dalam menyelesaikan masalah tersebut.
                        </p>
                        <h2 className="text-2xl font-medium mt-7">3. Latih Mindfulness</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            Mindfulness atau kesadaran penuh dapat membantu mengurangi overthinking dengan membawa perhatian kembali ke momen saat ini. Teknik seperti meditasi, pernapasan dalam, atau sekadar memperhatikan lingkungan sekitar bisa membantu menenangkan pikiran dan mengurangi stres. Dengan berlatih mindfulness secara rutin, Anda dapat melatih otak untuk lebih fokus pada apa yang terjadi saat ini, daripada terus-menerus mengkhawatirkan masa lalu atau masa depan. Luangkan waktu beberapa menit setiap hari untuk duduk diam dan berlatih bernapas secara perlahan, sehingga Anda bisa lebih terkoneksi dengan diri sendiri.
                        </p>
                        <h2 className="text-2xl font-medium mt-7">4. Tetapkan Waktu untuk Berpikir</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            Jika Anda merasa sulit untuk berhenti berpikir berlebihan, coba atur waktu khusus untuk merenung. Misalnya, alokasikan 10-15 menit sehari untuk memikirkan permasalahan yang ada, lalu setelah itu, alihkan perhatian ke aktivitas lain. Dengan cara ini, Anda tetap memberikan ruang bagi pikiran untuk menyusun solusi, tetapi tidak membiarkannya menguasai seluruh waktu dan energi Anda. Menjadwalkan waktu untuk berpikir juga bisa membantu Anda merasa lebih terkontrol dan tidak mudah terbawa emosi oleh pikiran negatif.
                        </p>
                        <h2 className="text-2xl font-medium mt-7">5. Berbicara dengan Orang Lain</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            Salah satu cara terbaik untuk mengatasi overthinking adalah berbicara dengan seseorang yang dapat dipercaya, seperti teman, keluarga, atau bahkan seorang profesional. Mendiskusikan apa yang ada di pikiran Anda dapat membantu melihat permasalahan dari sudut pandang yang berbeda. Terkadang, hanya dengan mengutarakan kekhawatiran kepada orang lain, Anda bisa merasa lebih lega dan menemukan solusi yang lebih jelas. Selain itu, mendengar pengalaman orang lain dalam menghadapi masalah serupa bisa memberikan perspektif baru yang membantu Anda mengelola pikiran lebih baik.
                        </p>
                        <h2 className="text-2xl font-medium mt-7">6. Hindari Perfeksionisme</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            Banyak orang mengalami overthinking karena mereka terlalu mengejar kesempurnaan. Mereka khawatir akan melakukan kesalahan atau tidak mencapai hasil yang sempurna. Padahal, tidak ada yang sempurna dalam hidup. Fokuslah pada progres daripada kesempurnaan, dan ingat bahwa melakukan sesuatu dengan baik sudah cukup, tanpa harus berusaha menjadi sempurna. Menghargai proses dan belajar dari kesalahan bisa membantu Anda lebih rileks dalam menjalani kehidupan tanpa tekanan berlebihan.
                        </p>
                        <h2 className="text-2xl font-medium mt-7">7. Jaga Pola Hidup Sehat</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            Pola hidup sehat sangat berpengaruh pada kesehatan mental. Pastikan Anda mendapatkan cukup tidur, mengonsumsi makanan bergizi, dan rutin berolahraga. Aktivitas fisik dapat membantu mengurangi stres dan kecemasan serta meningkatkan produksi hormon bahagia seperti endorfin. Hindari juga konsumsi kafein atau alkohol secara berlebihan, karena dapat memperburuk kondisi mental. Dengan menjaga tubuh tetap sehat, pikiran Anda juga akan lebih stabil dan tidak mudah terbawa arus overthinking.
                        </p>
                        <h2 className="text-2xl font-medium mt-7">8. Fokus pada Hal yang Bisa Dikendalikan</h2>
                        <p className="mb-4 text-lg font-thin mt-4">
                            Salah satu penyebab utama overthinking adalah terlalu banyak memikirkan hal-hal yang berada di luar kendali kita. Cobalah untuk mengidentifikasi aspek-aspek yang bisa Anda kendalikan dan fokuslah pada hal-hal tersebut. Dengan mengalihkan perhatian ke tindakan yang bisa dilakukan, Anda akan merasa lebih tenang dan memiliki kendali atas situasi. Ingat bahwa tidak semua hal dalam hidup bisa Anda kendalikan, tetapi Anda selalu bisa memilih bagaimana cara meresponsnya.
                        </p>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Artikel1;