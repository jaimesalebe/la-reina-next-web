export async function fetchYoutube(id) {

    try {
        const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=${process.env.API_KEY}&id=${id}&part=snippet`, { next: { revalidate: 60 } })
        const ytData = await res.json()
        return ytData
    }
    catch (error) {
        console.log(error);
    }
}


export async function getPosts() {
    try {
        const res = await fetch('https://strapi-production-e78c.up.railway.app/api/posts?sort[createdAt]=desc&populate=*', { next: { revalidate: '60' } });
        const { data } = await res.json()

        const mappedPosts = data?.map(post => ({
            id: post.id,
            title: post.attributes.title,
            subtitle: post.attributes.subtitle,
            description: post.attributes.description,
            image: post.attributes.image.data[0].attributes.url,
            tags: post.attributes.tags,
            slug: post.attributes.slug,
        }))

        return mappedPosts

    } catch (error) {
        console.log(error);
    }

}

export async function getRecommendedVideos() {
    try {
        const res = await fetch('https://strapi-production-e78c.up.railway.app/api/recommended-videos?sort[createdAt]=desc&populate=*', { next: { revalidate: 60 } })
        const {data} = await res.json()

        const mappedRecommendedVideos = data?.map(recommendedVideos => ({
            id: recommendedVideos.id,
            singer: recommendedVideos.attributes.singerName,
            song: recommendedVideos.attributes.song,
            videoID: recommendedVideos.attributes.videoID
        }))

        return mappedRecommendedVideos

    }
    catch (error) {
        console.log(error);
    }
}

export async function getPostFiltered(slug) {
    try {
        const res = await fetch(`https://strapi-production-e78c.up.railway.app/api/posts?populate=*&filters[slug][$eq]=${slug}`, { next: { revalidate: 'no-store' } })
        return res.json();
    }
    catch (error) {
        console.log(error);
    }
}