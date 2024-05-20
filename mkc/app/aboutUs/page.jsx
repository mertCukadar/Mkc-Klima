'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Carousel } from '../components/carousel'
import { Description } from '../components/descripton'
import { SolutionsCard } from '../components/solutions-card'


export default function AboutUs(){
  const descripton1 = 'Hava ve su soğutmalı chiller sistemleri konusunda kapsamlı hizmetler sunuyoruz. Bu hizmetler arasında bakım ve onarım işlemleri, kontrol kartı değişimi ve sistemlerin yeniden dizayn edilmesi bulunmaktadır. İhtiyaç duyduğunuz her türlü teknik destek ve danışmanlık için bizimle iletişime geçebilirsiniz. Uzman ekibimiz, chiller sistemlerinizin verimli ve güvenilir bir şekilde çalışmasını sağlamak için her zaman yanınızdadır.'
  const descripton2 = 'Paket hijyenik sistemler, hijyenik santraller ve bu sistemlerin ekipmanları konusunda geniş bir yelpazede hizmetler sunuyoruz. Yedek parça temini, sistemlerin bakım ve onarımı, ayrıca montaj hizmetleri de dahil olmak üzere tüm ihtiyaçlarınızı karşılayacak çözümlerimiz mevcuttur. Hijyenik ortamların korunması ve sistemlerin kesintisiz çalışması için profesyonel ve güvenilir hizmetler sunuyoruz. Her türlü bakım ve onarım ihtiyacınızda, kaliteli yedek parçalar ve uzman kadromuzla yanınızdayız.'
  const descripton3 = 'Klima ve pompa sistemlerinin otomasyonu alanında uzman hizmetler sunuyoruz. Sistemlerinizin ihtiyacına göre özel yazılım ve donanım temin etmekteyiz. Otomasyon çözümlerimiz, enerji verimliliğini artırırken işletme maliyetlerini azaltmayı hedeflemektedir. Teknik ekibimiz, otomasyon sistemlerinin kurulumu, entegrasyonu ve bakımını gerçekleştirmekte, böylece size kesintisiz ve güvenilir bir hizmet sunmaktadır. İhtiyaçlarınıza özel çözümler için bizimle iletişime geçebilirsiniz.'
  const descripton4 = 'Klima ve havalandırma sistemleri konusunda profesyonel danışmanlık hizmetleri sunuyoruz. Sistemlerin kurulumu, bakımı ve optimize edilmesi konularında uzman ekibimizle yanınızdayız. Enerji verimliliği, iç ortam hava kalitesinin artırılması ve sistemlerin sorunsuz çalışması için size en uygun çözümleri sunmaktayız. Danışmanlık hizmetlerimizle, klima ve havalandırma sistemlerinizin performansını en üst seviyeye çıkarmayı hedefliyoruz. Her türlü soru ve ihtiyaçlarınız için bizimle iletişime geçebilirsiniz.'
  setTimeout(function() {
    // Sayfanın yüklendiğini işaretlemek için burada gerekli işlemleri yapabilirsiniz
}, 3000); 

 
  return(

 <div>
    <div className='flex py-10 md:flex-row flex-col justify-center items-center '>

      <div className='flex flex-col items-center justify-center p-5 w-3/4'>
        <Carousel />
      </div>

      <div className='flex flex-col justify-center w-3/4 m:w-full'>
        <Description />
      </div>

    </div>

    <div id='solutions' className='text-black flex md:flex-row flex-col justify-center items-center'>
      <SolutionsCard hizmetName='Hava ve Su Soğutmalı Chiller Hizmetleri' hizmetDescription={descripton1} icon='hvac' />
      <SolutionsCard hizmetName='Hijyenik Santraller ve Ekipman Hizmetleri' hizmetDescription={descripton2} />
      <SolutionsCard hizmetName='Klima ve Pompa Otomasyonu' hizmetDescription={descripton3} icon='laptop' />
      <SolutionsCard hizmetName='Klima ve Havalandırma Danışmanlığı' hizmetDescription={descripton4} icon='support' />
    </div>
 </div>


    

         
      
      
  
  )  
}
