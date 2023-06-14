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
            image: post.attributes.image.data[0].attributes.formats.small.url,
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
        const { data } = await res.json()

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
        const res = await fetch(`https://strapi-production-e78c.up.railway.app/api/posts?populate=*&filters[slug][$eq]=${slug}`, { next: { revalidate: '60' } })
        return res.json();
    }
    catch (error) {
        console.log(error);
    }
}

export async function getPostFilteredAtemporal(){
    const res = await fetch("https://strapi-production-e78c.up.railway.app/api/posts?populate=*&filters[atemporal][$eq]=true", { next: { revalidate: '60' } })
    const {data} = await res.json();

    const mappedAtemporal = data?.map(postAtemporal => ({
        id: postAtemporal.id,
        title: postAtemporal.attributes.title,
        subtitle: postAtemporal.attributes.subtitle,
        description: postAtemporal.attributes.description,
        slug: postAtemporal.attributes.slug,
        image: postAtemporal.attributes.image.data[0].attributes.url,
        width: postAtemporal.attributes.image.data[0].attributes.width,
        height: postAtemporal.attributes.image.data[0].attributes.height
    }))

    return mappedAtemporal
}

export async function getFinalistas() {
    try {
        const res = await fetch("https://strapi-production-e78c.up.railway.app/api/finalistas?populate=*", { next: { revalidate: '60' } })
        const {data} = await res.json();


        const mappedFinalistas = data.map((finalista) => ({
            id: finalista.id,
            singer: finalista.attributes.singer,
            singerImage: finalista.attributes.singerImage.data[0].attributes.formats.thumbnail.url,
            songName: finalista.attributes.songName,
            song:  finalista.attributes.song.data[0].attributes.url
        }))


        return mappedFinalistas
        
    }
    catch (error) {
        console.log(error);
    }
}