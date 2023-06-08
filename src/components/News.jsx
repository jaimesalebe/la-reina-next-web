import Card from './Card'

async function getPosts() {
    const res = await fetch('https://strapi-production-e78c.up.railway.app/api/posts?populate=*', { next: { revalidate: 'no-store' } });

    const { data } = await res.json()

    const mappedPost = data?.map(post => ({
        id: post.id,
        title: post.attributes.title,
        subtitle: post.attributes.subtitle,
        description: post.attributes.description,
        image: post.attributes.image.data[0].attributes.formats.small.url,
        tags: post.attributes.tags,
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