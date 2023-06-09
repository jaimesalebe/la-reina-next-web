import Image from "next/image";
import VideosSection from "./Modal";

async function fetchData() {
    try {
        const res = await fetch('https://strapi-production-e78c.up.railway.app/api/recommended-videos?populate=*', { next: { revalidate: 60 } })
        const videoData = await res.json()
        return videoData
    }
    catch (error) {
        console.log(error);
    }
}

async function fetchYoutube(id) {
    const API_KEY = "AIzaSyDcbRyaezJqRfg5JRKviy6e-4gQuD4zpGw"

    try {
        const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${id}&part=snippet`, { next: { revalidate: 60 } })
        const ytData = await res.json()
        return ytData
    }
    catch (error) {
        console.log(error);
    }
}


async function RecommendedVideos() {

    const { data } = await fetchData()

    return (
        <>
            <h1 className="text-3xl font-bold text-center text-white">Videos recomendados</h1>
            <section className="flex justify-center flex-wrap gap-5">
                {
                    data?.map((video) => (
                        <VideosSection
                            key={video.id}
                            videoID={video.attributes.videoID}
                        >
                            <ImageYT videoID={video.attributes.videoID} />

                        </VideosSection>
                    ))
                }
            </section>
        </>
    )
}


async function ImageYT({videoID}) {

    const yt = await fetchYoutube(videoID)

    return (
        <Image src={yt?.items[0]?.snippet?.thumbnails?.maxres?.url} alt="" height={600} width={500} className="rounded-md h-full w-full" />
    )
}




export default RecommendedVideos