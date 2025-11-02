'use client'

import { Box } from '@/components/ui/box'
import { databaseMusic } from '@/data/database-music'

import {
  ListMusic,
  Pause,
  Play,
  Repeat2,
  SkipBack,
  SkipForward,
  X,
} from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export function PlayerHome() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const currentTrack = databaseMusic[currentIndex]

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    audio.addEventListener('timeupdate', updateTime)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleNext = () => {
    setCurrentIndex(prev => (prev === databaseMusic.length - 1 ? 0 : prev + 1))
    setIsPlaying(true)
  }

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? databaseMusic.length - 1 : prev - 1))
    setIsPlaying(true)
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.load()
    audio.play().catch(() => {
      setIsPlaying(false)
    })
  }, [currentIndex])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${minutes}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <Box className="col-span-4 px-0 py-0 flex flex-col justify-between max-sm:col-span-6">
      <div className="flex flex-col items-center justify-start gap-6 p-5 w-full">
        <div className="flex justify-between w-full">
          <span>Player</span>
          <ListMusic className="cursor-pointer" />
        </div>

        <div className="flex flex-col gap-6 text-center w-full items-center">
          <div className="w-full h-56 rounded-md bg-neutral-800 overflow-hidden max-sm:hidden">
            {currentTrack.url_album && (
              <Image
                src={currentTrack.url_album.replace(/^\.\//, '/')}
                alt={currentTrack.album}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <hgroup className="flex flex-col gap-2">
            <h2 className="text-[28px] font-bold">{currentTrack.album}</h2>
            <h3 className="text-sm font-bold">{currentTrack.artists}</h3>
            <h3 className="text-sm text-primary font-bold">
              {currentTrack.album}
            </h3>
          </hgroup>

          <div className="flex items-center gap-2 w-[280px]">
            <span>{formatTime(currentTime)}</span>
            <div className="relative flex-1 h-[2px] bg-neutral-500">
              <div
                className="absolute h-[2px] bg-primary top-0 left-0"
                style={{
                  width: `${(currentTime / (audioRef.current?.duration || 1)) * 100}%`,
                }}
              />
            </div>
            <span>{formatTime(audioRef.current?.duration || 0)}</span>{' '}
          </div>
        </div>
      </div>

      <div className="bg-primary flex items-center justify-center w-full py-5">
        <ul className="flex items-center gap-8 text-white">
          <li>
            <Repeat2 />
          </li>

          <li className="cursor-pointer" onClick={handlePrev}>
            <SkipBack />
          </li>

          <li
            className="bg-white size-14 flex items-center justify-center rounded-md cursor-pointer"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <Pause className="text-primary" />
            ) : (
              <Play className="text-primary" />
            )}
          </li>

          <li className="cursor-pointer" onClick={handleNext}>
            <SkipForward />
          </li>

          <li>
            <X />
          </li>
        </ul>
      </div>

      <audio ref={audioRef} src={currentTrack.src} />
    </Box>
  )
}
