import Card from './Card'
import Link from 'next/link'

async function getPosts() {
    const res = await fetch('http://34.234.73.220:1337/api/posts', { next: { cache: 'no-store', revalidate: 60 } });

    const { data } = await res.json()

    const mappedPost = data?.map(post => ({
        id: post.id,
        title: post.attributes.title,
        description: post.attributes.description,
        slug: post.attributes.slug,
    }))

    return mappedPost

}

async function News({children}) {

    const posts = await getPosts()

    return (
        <section className="flex flex-col gap-5 text-center justify-center text-white mx-5 lg:mx-0">
            <div className="flex justify-between sm:px-9">
                <h1 className="text-3xl font-bold">Noticias</h1>
                {children}
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 sm:gap-6 place-items-center'>
                {posts.map(post => (
                    <Card
                        key={post.id}
                        title={post.title}
                        subtitle={post.subtitle}
                        description={post.description}
                        link={`/noticias/${post.slug}`}
                    />
                ))}
            </div>
        </section>
    )
}

export default News