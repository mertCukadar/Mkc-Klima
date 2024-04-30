'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Carousel } from '../components/carousel'
import { Description } from '../components/descripton'

export default function AboutUs(){
 
  return(

 
    <div className='flex py-10 md:flex-row flex-col justify-center items-center '>

    <div className='flex flex-col items-center justify-center p-5 w-3/4'>
      <Carousel />
    </div>

    <div className='flex flex-col justify-center w-3/4 m:w-full'>
      <Description />
    </div>


  </div>

    

         
      
      
  
  )  
}
