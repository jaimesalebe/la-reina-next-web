'use client'

import { useRef, useState } from "react"

function usePlayer() {
    const [frecuencia, setFrecuencia] = useState("")
    const [isPlaying, setIsPlaying] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const audioPlayer = useRef();

    async function togglePlayPause() {
        if (!isPlaying) {
            try {
                setIsLoading(true)
                setError(null)
                await audioPlayer.current.load();
                await audioPlayer.current.play();
                setIsPlaying(true)
                setIsLoading(false)


            } catch (err) {
                setIsLoading(false)
                setError(err.message);
                setIsPlaying(false)
                audioPlayer.current.pause()
            }

            return
        }

        await audioPlayer.current.pause()
        setIsPlaying(false)
    }

    function handleFrecuencia(e) {
        setFrecuencia(e.target.value)
        setIsPlaying(false)
    }

    function handleVolume(e) {
        let volume = Number(e.target.value / 100);
        audioPlayer.current.volume = volume
    }

    return {
        frecuencia,
        isPlaying,
        isLoading,
        error,
        audioPlayer,
        togglePlayPause,
        handleFrecuencia,
        handleVolume
    }
}

export default usePlayer