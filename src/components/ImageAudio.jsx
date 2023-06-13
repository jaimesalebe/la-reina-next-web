'use client'
import { FaPlay, FaPause } from "react-icons/fa";
import usePlayer from '@/hooks/usePlayer';
import Image from 'next/image'
import {useState } from "react";

const ImageAudio = ({ audio }) => {

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
                <Image className="w-16 h-16 rounded-full" src="https://yt3.googleusercontent.com/muHfpLnRTVcfk8M7D0afg8RvjL1iJmYCjHSd00vGRTnXn5haR0oRkNUjwLMnNHHJh1CB2NCnIA=s900-c-k-c0x00ffffff-no-rj" alt="Jese image" width={505} height={505} />
                <button className='absolute rounded-full text-black inset-0 opacity-100 sm:opacity-0 hover:opacity-100 transition-opacity grid place-items-center' onClick={togglePlayPause}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
            </div>
            <div>
                {isPlaying && <p className="transition-all text-center text-red-900">{calculateTime(currentTime)}</p>}
            </div>
        </div>
    )
}

export default ImageAudio