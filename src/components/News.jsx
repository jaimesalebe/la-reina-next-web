import Card from './Card'
import Link from 'next/link'

function News() {
    return (
        <section className="flex flex-col gap-5 text-center justify-center text-white mx-5 lg:mx-0">
            <div className="flex justify-between sm:px-9">
                <h1 className="text-3xl font-bold">Noticias</h1>
                <Link className="group" href={`/`}>
                    <p className={`mb-3 text-xl font-semibold hover:text-yellow`}>
                        Ver más{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"> -&gt; </span>
                    </p>
                </Link>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 sm:gap-6 place-items-center'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

            </div>
        </section>
    )
}

export default News