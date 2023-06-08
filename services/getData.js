async function getPosts() {
    const res = await fetch('https://strapi-production-e78c.up.railway.app/api/posts?sort[createdAt]=desc&populate=*', { next: { revalidate: '60' } });

    const { data } = await res.json()

    const mappedPost = data?.map(post => ({
        id: post.id,
        title: post.attributes.title,
        subtitle: post.attributes.subtitle,
        description: post.attributes.description,
        image: post.attributes.image.data[0].attributes.url,
        tags: post.attributes.tags,
        slug: post.attributes.slug,
    }))

    return mappedPost

}