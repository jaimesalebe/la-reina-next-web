'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useRef, useState } from 'react'
import { DotWave } from '@uiball/loaders'
import Image from 'next/image'

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [Autoplay()])
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
    <div ref={carouselRef}>
      <div className="embla text-white" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide grid place-items-center">
            <Image width={500} height={316} alt='' src={
              "https://images.unsplash.com/photo-1682686578289-cf9c8c472c9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"} />
          </div>
          <div className='embla__slide grid place-items-center'>
            <Image width={500} height={316} alt='' src={
              "https://images.unsplash.com/photo-1685313836995-c9218a4f3d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"} />
          </div>
          <div className='embla__slide grid place-items-center'>
            <Image width={500} height={316} alt='' src={
              "https://images.unsplash.com/photo-1683009427513-28e163402d16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} />
          </div>
        </div>
      </div>
      {emblaApi ?
        (
          <div className='flex justify-center gap-2 mt-2'>
            {Array.from(Array(emblaApi.slideNodes().length).keys()).map((index) => (

              <button
                className={`w-4 h-4 rounded-full ${index === selectedIndex ? 'bg-yellow' : 'bg-white '}`}
                key={index}
                onClick={() => (emblaApi.scrollTo(index))}
              />

            ))}
          </div>
        ) :
        <div className='flex justify-center'>
          <DotWave size={80} color='#fff' />
        </div>
      }
    </div>
  )
}
