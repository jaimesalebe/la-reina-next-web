'use client'
import { FaPlay, FaPause } from "react-icons/fa";
import { Waveform } from '@uiball/loaders'
import usePlayer from '../hooks/usePlayer';
import Logo from "./Logo";

function Player() {

    const { isPlaying, isLoading, frecuencia, error, audioPlayer, handleFrecuencia, handleVolume, togglePlayPause } = usePlayer()

    return (
        <>
            <div className={`grid place-items-center fixed z-10 bg-darkblue-200 bottom-0 w-full border-t border-gray-400 ${isPlaying && "shadow-2xl shadow-white"} ${error && "shadow-none"}`}>
                <audio ref={audioPlayer} src={frecuencia}></audio>
                <div className={`container h-24 w-full flex justify-between items-center px-7 gap-10 ${error && "border border-red-700"}`}>
                    <div className="flex items-center flex-row-reverse gap-2">
                        <select id='playerSelect' className={`text-darkblue-300 rounded-md bg-yellow font-semibold p-1 h-7`} onChange={handleFrecuencia}>
                            <option value={""}>Ciudad</option>
                            <option value="https://playerservices.streamtheworld.com/api/livestream-redirect/RNA_BARRANQUILLA.mp3">Barranquilla</option>
                            <option value="https://playerservices.streamtheworld.com/api/livestream-redirect/RNA_CARTAGENA.mp3">Cartagena</option>
                        </select>
                        <span className="bg-black/50 rounded-md p-2">
                            <Logo />
                        </span>
                    </div>
                    {error
                        && <marquee className='text-white text-center px-10'>
                            {`¡Algo ha salido mal! Escoja una ciudad valida o intente reproducir nuevamente.`}
                        </marquee>

                    }
                    <div className='flex justify-center items-center gap-10'>
                        <input type='range' className=" h-2 accent-yellow rounded-lg appearance-none cursor-grab bg-black/30 hidden sm:block" onChange={handleVolume} />
                        <button className={`bg-yellow hover:bg-yellow/70 p-4 rounded-full text-darkblue-300 font-semibold`} disabled={isLoading} onClick={togglePlayPause}> {isLoading ? <Waveform size={20} color='#212121' /> : isPlaying ? <FaPause /> : <FaPlay />} </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Player
