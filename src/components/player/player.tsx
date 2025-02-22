'use client'

import cover from '@/assets/cover.jpg'
import { music } from '@/data/music-list'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { Next } from '../icons/next'
import { Pause } from '../icons/pause'
import { Play } from '../icons/play'
import { Previous } from '../icons/previous'

export function Player() {
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const currentTrack = music[currentMusicIndex]

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const playNext = () => {
    if (currentMusicIndex < music.length - 1) {
      setCurrentMusicIndex(currentMusicIndex + 1)
      setIsPlaying(true)
    }
  }

  const playPrevious = () => {
    if (currentMusicIndex > 0) {
      setCurrentMusicIndex(currentMusicIndex - 1)
      setIsPlaying(true)
    }
  }

  return (
    <div className="fixed bottom-0 flex justify-between items-center w-full py-4 2xl:py-8 px-8 bg-white/20 backdrop-blur-lg rounded-t-2xl max-sm:flex-col max-sm:gap-4 max-sm:px-4">
      <audio
        ref={audioRef}
        src={currentTrack.url}
        onEnded={playNext}
        autoPlay={isPlaying}
      />

      <div className="flex items-center gap-8 max-sm:gap-5">
        <Image src={cover} className="rounded-md size-12" alt="Capa do álbum" />

        <div className="flex flex-col gap-[1px] text-white">
          <span className="text-xl font-semibold uppercase">
            {currentTrack.music}
          </span>
          <span className="text-primary font-bold font-destaque">
            <Link href="https://donattodev.com.br/links" target="_blank">
              {currentTrack.author}
            </Link>
          </span>
        </div>
      </div>
      <div>
        <ul className="flex items-center gap-40 max-sm:gap-24">
          <li
            className={`cursor-pointer ${currentMusicIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={playPrevious}
          >
            <Previous className="size-8" />
          </li>
          <li className="cursor-pointer" onClick={togglePlay}>
            {isPlaying ? (
              <Pause className="size-8" />
            ) : (
              <Play className="size-8" />
            )}
          </li>
          <li
            className={`cursor-pointer ${currentMusicIndex === music.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={playNext}
          >
            <Next className="size-8" />
          </li>
        </ul>
      </div>
    </div>
  )
}
