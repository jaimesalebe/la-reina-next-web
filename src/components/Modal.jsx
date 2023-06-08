'use client'
import Image from "next/image"
import { useState } from "react"

function Modal({ handleClose, isClose, children }) {
    return (
        <div onClick={handleClose} className={`backdrop-blur-sm  fixed inset-0 bg-black/40 z-30 h-screen grid place-items-center ${isClose && 'transition-all hidden'}`}>
            {children}
        </div>
    )
}


function VideosSection({ videoID, singerImage }) {

    const [isClose, setIsClose] = useState(true)

    function handleOpen() {
        setIsClose(false)
    }

    function handleClose() {
        setIsClose(true)
    }


    return (
        <>
            <article className="w-96">
                <Image src={singerImage} alt="" height={600} width={500} onClick={handleOpen} className="cursor-pointer rounded-md h-full w-full " />
                <Modal handleClose={handleClose} isClose={isClose}>
                    {!isClose && <iframe src={`https://www.youtube.com/embed/${videoID}`} className="w-3/4 h-1/4 sm:w-1/2 sm:h-1/2 md:w-4/6 md:h-1/3 lg:w-1/2 lg:h-1/2"  />}
                </Modal>
            </article>
        </>
    )
}


async function fetchData() {
    try {
        const res = await fetch('https://strapi-production-e78c.up.railway.app/api/recommended-videos?populate=*', {next: {revalidate: 60}})
        const videoData = await res.json();
        return videoData
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
            <section className="flex justify-center flex-wrap gap-2">
                {
                    data?.map((video) => (
                        <VideosSection
                            key={video.id}
                            videoID={video.attributes.videoID}
                            singerImage={video.attributes.singerImage.data[0].attributes.url}
                        />
                    ))
                }
            </section>
        </>
    )
}



export default RecommendedVideos