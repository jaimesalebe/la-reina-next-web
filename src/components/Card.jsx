import Image from 'next/image'
import Link from 'next/link'

function Card({ title, subtitle, description, image, tags, link }) {
    return (
        <article className=' h-full justify-center bg-darkblue-100 rounded-lg  sm:w-full hover:scale-105 transition-all duration-500'>
            <Link href={link}>
                <figure className='flex flex-col h-full justify-between' >
                    <Image width={600} height={365} className='rounded-t-md object-cover w-full h-full' alt='' src={image} />
                    <figcaption className='flex flex-col justify-between p-3 text-start'>
                        <header className='leading-10'>
                            <h3 className='text-gray-600 line-clamp-1'>{subtitle}</h3>
                            <div className='flex gap-3 snap-mandatory flex-wrap'>
                                {tags.map((tag, index) => (
                                    <span key={index} className='bg-yellow p-0.5 text-darkblue-300 text-xs line-clamp-1 font-semibold rounded-md'>{tag}</span>
                                ))}
                            </div>
                        </header>
                        <footer>
                            <h2 className='mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2'>{title}</h2>
                            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2'>{description}</p>
                        </footer>
                    </figcaption>
                </figure>
            </Link>
        </article>
    )
}

export default Card