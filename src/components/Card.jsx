import Image from 'next/image'
import Link from 'next/link'

function Card({title, subtitle, description, link}) {
    return (
        <article className='flex flex-col justify-center items-center bg-darkblue-100 rounded-lg  sm:w-full hover:scale-105 transition-all duration-500'>
            <Link href={link}>
                <figure>
                    <Image width={500} height={100} className='rounded-t-md object-cover' alt='' src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
                    <figcaption className='flex flex-col justify-between p-3 text-start'>
                        <header className='leading-10'>
                            <h3 className='text-gray-600 line-clamp-1'>{subtitle}</h3>
                            <div className='flex gap-3'>
                            <span className='bg-yellow p-0.5 text-darkblue-300 text-sm font-semibold rounded-md '>Vallenato</span>
                            <span className='bg-yellow p-0.5 text-darkblue-300 text-sm font-semibold rounded-md '>Caja</span>
                            <span className='bg-yellow p-0.5 text-darkblue-300 text-sm font-semibold rounded-md '>Acordeon</span>
                            </div>
                        </header>
                        <footer>
                            <h2 className='mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white'>{title}</h2>
                            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2'>{description}</p>
                        </footer>
                    </figcaption>
                </figure>
            </Link>
        </article>
    )
}

export default Card