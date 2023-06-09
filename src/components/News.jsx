import { getPosts } from '../../services/getData'
import Card from './Card'

async function News({children}) {

    const posts = await getPosts()

    return (
        <section className="flex flex-col gap-5 text-center justify-center text-white mx-5 lg:mx-0">
            <div className="flex justify-between sm:px-9">
                <h1 className="text-3xl font-bold">Noticias</h1>
                {children}
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 sm:gap-6 place-items-center'>
                {posts.slice(0,5).map(post => (
                    <Card
                        key={post.id}
                        title={post.title}
                        subtitle={post.subtitle}
                        description={post.description}
                        image={post.image}
                        tags={post.tags}
                        link={`/noticias/${post.slug}`}
                    />
                ))}
            </div>
        </section>
    )
}

export default News