import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

export function Carousel() {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="embla rounded-lg" ref={emblaRef}>
      <div className="embla__container">
        <Image src="/pano.jpeg" alt="pano" width={500} height={200} className='embla__slide' layout="responsive" />
        <Image src="/chiller.jpeg" alt="chiller" width={500} height={200} className='embla__slide' layout="responsive" />
        <Image src="/work.jpeg" alt="work" width={500} height={200} className='embla__slide' layout="responsive" />
      </div>
    </div>
  )
}


