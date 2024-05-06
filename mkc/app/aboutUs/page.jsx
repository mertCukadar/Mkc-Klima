'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Carousel } from '../components/carousel'
import { Description } from '../components/descripton'
import { SolutionsCard } from '../components/solutions-card'


export default function AboutUs(){
  const descripton1 = 'Hava ve su sogutmalı chller Bakım onarım, kontrol kartı değişimi, yeniden dizaynı konularında bizimle iletişime geçebilirsiniz.'
  const descripton2 = 'Paket hijyenik, Hijyenik Santraller ve ekipmanları yedek parça, bakım , onarım ve montaj hizmetleri'
  const descripton3 = 'Klima ve pompa sistemleri otomasyonu veya ihtiyaca göre yazılım ve donanım temini'
  const descripton4 = 'Klima ve havalandırma sistemleri konusunda danışmanlık hizmetleri'


 
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
      <SolutionsCard hizmetName='Hizmet 1' hizmetDescription={descripton1} />
      <SolutionsCard hizmetName='Hizmet 2' hizmetDescription={descripton2} />
      <SolutionsCard hizmetName='Hizmet 3' hizmetDescription={descripton3} />
      <SolutionsCard hizmetName='Hizmet 4' hizmetDescription={descripton4} />
    </div>
 </div>


    

         
      
      
  
  )  
}
