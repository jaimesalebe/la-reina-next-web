'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useRef, useState } from 'react'
import { LineWobble } from '@uiball/loaders'
import Image from 'next/image'
import { getPostFilteredAtemporal } from '../../services/getData'
import { data } from 'autoprefixer'
import Link from 'next/link'

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [Autoplay()])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    if (emblaApi) {

      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
      });
    }
  }, [emblaApi]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPostFilteredAtemporal()
      setPosts(data)
    }

    fetchData()
  }, [])



  return (
    <div>
      <div className="embla text-white sm:rounded-md" ref={emblaRef}>
        <div className="embla__container h-80">
          {
            posts?.map(post => (
              <div className="embla__slide grid place-items-center relative" key={post.id}>
                <Image
                  width={post.width}
                  height={post.height}
                  alt=''
                  priority={true}
                  src={post.image}
                  className='w-full object-cover object-center' />
                  <Link className='absolute inset-0 grid place-items-center text-3xl font-bold text-center p-3 bg-gradient-to-tl from-black to-yellow/10' href={`noticias/${post.slug}`}><span className='hover:underline'>{post.title}</span></Link>
              </div>
            ))
          }
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
          : <LineWobble color='#fff' size={100} />}
      </div>
    </div>
  )
}
