import Link from "next/link";
import React from "react";

export function Description(){
    return(
    <div className='flex flex-col justify-center '>
        <div className='p-5 flex flex-row justify-center items-center '>
            <div className='flex flex-col justify-center bg-cyan-900 rounded-sm p-5 shadow-2xl shadow-slate-500'>
            <div className=''>
                <h1 className=' text-2xl font-semibold mb-3'>
                    MKC Klima Elektrik Otomasyon
                </h1>
                <h1 className=' text-4xl font-semibold mb-3'>
                Klima ve Otomasyonun Buluşması: İdeal Sıcaklık, Mükemmel Kontrol
                </h1>
            </div>

            <div className='flex  flex-col justify-center mb-5'>
                <p>2008 yılında köklü bir deneyimle kurulan firmamız, klima ve havalandırma sistemleri alanında sektörün lideri olmaya devam ediyor. Ankara merkezli olarak başladığımız bu yolculukta, 2024 itibariyle Muğla Ortaca'da da şubemizle hizmetinizdeyiz. Müşterilerimize sağladığımız çözümlerdeki uzmanlığımız ve tutkumuzla, her zaman en üstün hizmeti sunma gayretindeyiz.

Firmamız, klima ve havalandırma sistemleri konusundaki derin bilgi ve tecrübemizi müşterilerimizin taleplerini en iyi şekilde karşılamak için kullanıyor. Müşteri memnuniyeti bizim için en önemli önceliklerden biridir ve bu doğrultuda çalışmalarımızı sürdürüyoruz. Sektördeki yenilikleri yakından takip ediyor, teknoloji ve kaliteyi bir araya getirerek müşterilerimize en verimli ve güvenilir çözümleri sunuyoruz.
                </p>
            </div>

            <div className="flex items-center">
                <Link href="/contact">
                    <p className=" text-white p-3 rounded-sm border-cyan-800 border-2 cursor-pointer hover:border-cyan-700 hover:text-white">İletişim</p>
                </Link>
            </div>
           

            </div>

          

        </div>
    </div>
    )
}