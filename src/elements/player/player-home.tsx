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
    <Box className="xl:col-span-4  flex flex-col p-6 bg-zinc-900/40 backdrop-blur-3xl border border-white/5 rounded-4xl shadow-2xl relative overflow-hidden group">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 size-64 bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="hidden sm:flex flex-col  gap-8 relative z-10">
        <div className="flex justify-between items-center w-full">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">
            Tocando Agora
          </span>
          <button
            type="button"
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
              <h4 className="text-[10px] text-white/20 font-medium">
                Álbum: {currentTrack.album}
              </h4>
            </hgroup>

            {/* Progress Bar */}
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
              <div className="flex justify-between text-[10px] font-bold tabular-nums text-white/30">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(audioRef.current?.duration || 0)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className=" flex flex-col gap-4">
          <div className="flex items-center justify-center gap-8">
            <button
              type="button"
              className="text-white/20 hover:text-white transition-colors cursor-pointer"
            >
              <Repeat2 size={18} />
            </button>
            <div className="flex items-center gap-6">
              <button
                type="button"
                className="text-white/60 hover:text-white hover:scale-110 transition-all cursor-pointer"
                onClick={handlePrev}
              >
                <SkipBack size={22} fill="currentColor" />
              </button>
              <button
                type="button"
                className="bg-primary size-14 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 hover:shadow-[0_0_30px_rgba(242,162,12,0.4)] transition-all"
                onClick={togglePlay}
              >
                {isPlaying ? (
                  <Pause size={24} fill="black" className="text-black" />
                ) : (
                  <Play size={24} fill="black" className="text-black ml-1" />
                )}
              </button>
              <button
                type="button"
                className="text-white/60 hover:text-white hover:scale-110 transition-all cursor-pointer"
                onClick={handleNext}
              >
                <SkipForward size={22} fill="currentColor" />
              </button>
            </div>
            <button
              type="button"
              className="text-white/20 hover:text-white transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Player */}
      <div className="sm:hidden fixed bottom-6 left-6 right-6 h-20 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-3 flex items-center justify-between shadow-2xl z-50 animate-in slide-in-from-bottom-10 duration-700">
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className="size-14 relative shrink-0 rounded-lg overflow-hidden shadow-lg border border-white/5">
            {currentTrack.url_album && (
              <Image
                src={currentTrack.url_album.replace(/^\.\//, '/')}
                alt={currentTrack.album}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div className="flex flex-col min-w-0 pr-4">
            <span className="text-sm font-black truncate">
              {currentTrack.music}
            </span>
            <span className="text-[10px] font-bold text-primary uppercase tracking-wider truncate">
              {currentTrack.artists.join(', ')}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="size-12 bg-primary rounded-xl flex items-center justify-center shadow-lg active:scale-95 transition-transform"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <Pause size={22} fill="black" className="text-black" />
            ) : (
              <Play size={22} fill="black" className="text-black ml-1" />
            )}
          </button>
          <button
            type="button"
            className="p-2 text-white/40 active:scale-95"
            onClick={handleNext}
          >
            <SkipForward size={22} />
          </button>
        </div>
      </div>

      <audio ref={audioRef} src={currentTrack.src} />
    </Box>
  )
}
