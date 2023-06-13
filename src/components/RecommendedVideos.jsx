
import { getRecommendedVideos } from "../../services/getData";
import ImageYT from "./modal/ImageYT";
import Video from "./modal/VideoYT";

async function RecommendedVideos() {

    const recommendedVideos = await getRecommendedVideos()

    return (
        <>
            <h1 className="text-3xl font-bold text-center text-white">Videos recomendados</h1>
            <section className="flex justify-center flex-wrap gap-5">
                {
                    recommendedVideos?.map((video) => (
                        <Video
                            key={video.id}
                            videoID={video.videoID}
                            singer={video.singer}
                            song={video.song}
                        >
                            <ImageYT videoID={video.videoID} />

                        </Video>
                    ))
                }
            </section>
        </>
    )
}


export default RecommendedVideos