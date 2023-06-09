'use client'
import Image from "next/image"
import { useEffect, useState } from "react"

function Modal({ handleClose, isClose, children }) {
    return (
        <div onClick={handleClose} className={`backdrop-blur-sm  fixed inset-0 bg-black/40 z-30 h-screen grid place-items-center ${isClose && 'transition-all hidden'}`}>
            {children}
        </div>
    )
}



function VideosSection({ videoID, children }) {

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
                <div className="relative">
                    {children}
                    <div onClick={handleOpen} className="sm:opacity-0 transition-all duration-500 rounded-md absolute inset-0 bg-gradient-to-tl from-black to-yellow/10 sm:hover:opacity-100 flex flex-col justify-end items-end cursor-pointer">
                        <h4 className="text-white text-2xl px-2 ">Nombre del artista</h4>
                        <p className="text-white p-2">Nombre de la canción</p>
                    </div>

                </div>
                <Modal handleClose={handleClose} isClose={isClose}>
                    {!isClose && <iframe src={`https://www.youtube.com/embed/${videoID}`} className="w-3/4 h-1/4 sm:w-1/2 sm:h-1/2 md:w-4/6 md:h-1/3 lg:w-1/2 lg:h-1/2" />}
                </Modal>
            </article>
        </>
    )
}


export default VideosSection