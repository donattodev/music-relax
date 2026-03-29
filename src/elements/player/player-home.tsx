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
  Volume2,
  VolumeX,
  X,
} from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export function PlayerHome() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [isLooping, setIsLooping] = useState(false)
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

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleLoop = () => {
    if (audioRef.current) {
      audioRef.current.loop = !isLooping
      setIsLooping(!isLooping)
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.load()
    if (isPlaying) {
      audio.play().catch(() => {
        setIsPlaying(false)
      })
    }
  }, [currentIndex])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${minutes}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="xl:col-span-4 flex flex-col p-8 bg-zinc-900/40 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 size-64 bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="hidden sm:flex flex-col  gap-8 relative z-10">
        <div className="flex justify-between items-center w-full">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">
            Tocando Agora
          </span>
          <button
            type="button"
            aria-label="Ver playlist"
            className="text-white/40 hover:text-white transition-colors cursor-pointer"
          >
            <ListMusic size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-6">
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl group/cover border border-white/5">
            {currentTrack.url_album && (
              <Image
                src={currentTrack.url_album.replace(/^\.\//, '/')}
                alt={currentTrack.album}
                fill
                className="object-cover transition-transform duration-700 group-hover/cover:scale-110"
              />
            )}
            <div className="absolute inset-0 bg-black/20 group-hover/cover:bg-black/0 transition-colors" />
          </div>

          <div className="space-y-3">
            <hgroup className="space-y-0.5">
              <h2 className="text-2xl font-black tracking-tight truncate">
                {currentTrack.music}
              </h2>
              <h3 className="text-xs font-bold text-primary tracking-widest uppercase">
                {currentTrack.artists.join(', ')}
              </h3>
              <h4 className="text-[10px] text-white/50 font-medium">
                Álbum: {currentTrack.album}
              </h4>
            </hgroup>

            <div className="space-y-2 pt-2">
              <div className="relative h-1 w-full bg-white/5 rounded-full overflow-hidden cursor-pointer group/progress">
                <div
                  className="absolute h-full bg-primary transition-all duration-300"
                  style={{
                    width: `${(currentTime / (audioRef.current?.duration || 1)) * 100}%`,
                  }}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/progress:opacity-100 transition-opacity" />
              </div>
              <div className="flex justify-between text-[10px] font-bold tabular-nums text-white/60">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(audioRef.current?.duration || 0)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center gap-10">
            <button
              type="button"
              aria-label={isLooping ? "Desativar repetição" : "Ativar repetição"}
              className={`transition-colors cursor-pointer ${isLooping ? 'text-primary' : 'text-white/40 hover:text-white'}`}
              onClick={toggleLoop}
            >
              <Repeat2 size={20} />
            </button>
            <div className="flex items-center gap-8">
              <button
                type="button"
                aria-label="Música anterior"
                className="text-white/60 hover:text-white hover:scale-110 transition-all cursor-pointer"
                onClick={handlePrev}
              >
                <SkipBack size={24} fill="currentColor" />
              </button>
              <button
                type="button"
                aria-label={isPlaying ? "Pausar música" : "Tocar música"}
                className="bg-primary size-14 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 hover:shadow-[0_0_30px_rgba(242,162,12,0.4)] transition-all"
                onClick={togglePlay}
              >
                {isPlaying ? (
                  <Pause size={28} fill="black" className="text-black" />
                ) : (
                  <Play size={28} fill="black" className="text-black ml-1" />
                )}
              </button>
              <button
                type="button"
                aria-label="Próxima música"
                className="text-white/60 hover:text-white hover:scale-110 transition-all cursor-pointer"
                onClick={handleNext}
              >
                <SkipForward size={24} fill="currentColor" />
              </button>
            </div>
            <button
              type="button"
              aria-label={isMuted ? "Desativar mudo" : "Ativar mudo"}
              className="text-white/60 hover:text-white transition-colors cursor-pointer"
              onClick={toggleMute}
            >
              {isMuted ? <VolumeX size={20} className="text-red-500" /> : <Volume2 size={20} />}
            </button>
          </div>
        </div>
      </div>



      <audio ref={audioRef} src={currentTrack.src} preload="none" />
    </div>
  )
}
