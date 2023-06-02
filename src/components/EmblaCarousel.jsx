'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useRef, useState } from 'react'
import { LineWobble } from '@uiball/loaders'
import Image from 'next/image'

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const carouselRef = useRef(null);

  useEffect(() => {
    if (emblaApi) {

      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
      });
    }
  }, [emblaApi]);


  return (
    <div>
      <div className="embla text-white sm:rounded-md" ref={emblaRef}>
        <div className="embla__container h-80">
          <div className="embla__slide grid place-items-center">
            <Image
              width={2000}
              height={1000}
              alt=''
              priority={true}
              src={
                "https://images.unsplash.com/photo-1519802772250-a52a9af0eacb"}
              className='w-full object-cover object-center' />
          </div>
          <div className="embla__slide grid place-items-center">
            <Image
              width={2000}
              height={1000}
              alt=''
              priority={true}
              src={
                "https://images.unsplash.com/photo-1666919643134-d97687c1826c"}
              className='w-full object-cover object-center' />
          </div>
          <div className="embla__slide grid place-items-center">
            <Image
              width={2000}
              height={1000}
              alt=''
              priority={true}
              src={
                "https://images.unsplash.com/photo-1623079398404-4a024f3f4aee"}
              className='w-full object-cover object-' />
          </div>
        </div>
      </div>
      <div className='flex justify-center gap-2 mt-2'>
        {emblaApi
          ? Array.from(Array(emblaApi.slideNodes().length).keys()).map((index) => (

            <button
              className={`w-2.5 h-2.5 rounded-full transition-all ${index === selectedIndex ? 'bg-yellow w-5' : 'bg-white '}`}
              key={index}
              onClick={() => (emblaApi.scrollTo(index))}
            />

          )) 
          : <LineWobble color='#fff' size={100}/>}
      </div>
    </div>
  )
}
