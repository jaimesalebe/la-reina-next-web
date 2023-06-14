import Image from "next/image"
import { fetchYoutube } from "../../../services/getData"

async function ImageYT({videoID}) {

    const yt = await fetchYoutube(videoID)

    return (
        <Image src={yt?.items[0]?.snippet?.thumbnails?.high?.url} alt="" height={360} width={480} className="rounded-md h-full w-full object-cover" />
    )
}


export default ImageYT