import Image from "next/image"
import { fetchYoutube } from "../../../services/getData"

async function ImageYT({videoID}) {

    const yt = await fetchYoutube(videoID)

    return (
        <Image src={yt?.items[0]?.snippet?.thumbnails?.maxres?.url} alt="" height={600} width={500} className="rounded-md h-full w-full" />
    )
}


export default ImageYT