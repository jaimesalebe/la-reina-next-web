'use client'
import { FaPlay, FaPause } from "react-icons/fa";
import usePlayer from '@/hooks/usePlayer';
import Image from 'next/image'
import {useState } from "react";

const ImageAudio = ({ audio, singerImage }) => {

    const { isPlaying, audioPlayer, togglePlayPause } = usePlayer()
    const [currentTime, setCurrentTime] = useState(0);

    const handleTimeUpdate = () => {
        const { currentTime } = audioPlayer.current;
        setCurrentTime(currentTime);
    };

    function calculateTime(secs) {
        let minutes = Math.floor(secs / 60);
        let returnedMinutes = minutes < 10 ? `0${minutes}` : minutes
        let seconds = Math.floor(secs % 60)
        let returnedSeconds = seconds < 10 ? `0${seconds}` : seconds
        return `${returnedMinutes}:${returnedSeconds}`
    }


    return (
        <div>
            <div className="relative">
                <audio ref={audioPlayer} src={audio} onTimeUpdate={handleTimeUpdate} />
                <Image className="object-cover object-center-top w-16 h-16 rounded-full" src={singerImage} alt="Jese image" width={505} height={505} />
                <button className='absolute rounded-full text-black inset-0 opacity-100 sm:opacity-0 hover:opacity-100 transition-opacity grid place-items-center bg-gradient-to-tl from-black to-yellow/10' onClick={togglePlayPause}>
                    {isPlaying ? <FaPause color="#000814" /> : <FaPlay color="#000814" />}
                </button>
            </div>
            <div>
                {isPlaying && <p className="transition-all text-center text-red-900">{calculateTime(currentTime)}</p>}
            </div>
        </div>
    )
}

export default ImageAudio