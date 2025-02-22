'use client'

import cover from '@/assets/cover.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { Next } from '../icons/next'
import { Play } from '../icons/play'
import { Pause } from '../icons/pause'
import { Previous } from '../icons/previous'

export function Player() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="fixed bottom-0 flex justify-between items-center w-full py-4 2xl:py-8 px-8 bg-white/20 backdrop-blur-lg rounded-t-2xl max-sm:flex-col max-sm:gap-4 max-sm:px-4">
      {/* Referência ao áudio dentro da pasta public */}
      {/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
      <audio ref={audioRef} src="/audio/celestial.mpeg" />

      <div className="flex items-center gap-8 max-sm:gap-5">
        <Image src={cover} className="rounded-md size-12" alt="Capa do álbum" />

        <div className="flex flex-col gap-[1px] text-white">
          <span className="text-xl font-semibold uppercase">
            Ressonância Celestial
          </span>
          <span className="text-primary font-bold font-destaque">
            <Link href="https://donattodev.com.br/links" target="_blank">
              Felippe Donatto
            </Link>
          </span>
        </div>
      </div>

      <div>
        <ul className="flex items-center gap-40 max-sm:gap-24">
          <li className="cursor-pointer">
            <Previous className="size-8 opacity-50 cursor-not-allowed" />
          </li>
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <li className="cursor-pointer" onClick={togglePlay}>
            {isPlaying ? (
              <Pause className="size-8" />
            ) : (
              <Play className="size-8" />
            )}
          </li>
          <li className="cursor-pointer">
            <Next className="size-8 opacity-50 cursor-not-allowed" />
          </li>
        </ul>
      </div>
    </div>
  )
}
