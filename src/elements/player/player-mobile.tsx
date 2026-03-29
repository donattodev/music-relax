'use client'

import { databaseMusic } from '@/data/database-music'
import { 
  ChevronDown, 
  ListMusic, 
  Pause, 
  Play, 
  Repeat2, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX 
} from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export function PlayerMobile() {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [isLooping, setIsLooping] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
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

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setCurrentIndex(prev => (prev === databaseMusic.length - 1 ? 0 : prev + 1))
    setIsPlaying(true)
  }

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setCurrentIndex(prev => (prev === 0 ? databaseMusic.length - 1 : prev - 1))
    setIsPlaying(true)
  }

  const toggleMute = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleLoop = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (audioRef.current) {
      audioRef.current.loop = !isLooping
      setIsLooping(!isLooping)
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: Reproduzindo lógica do home
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.load()
    if (isPlaying) {
      audio.play().catch(() => {
        setIsPlaying(false)
      })
    }
  }, [currentIndex, isPlaying])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${minutes}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <>
      {/* 1. MODO MINI PLAYER (BARRA INFERIOR) */}
      {!isExpanded && (
        <div 
          className="fixed bottom-0 left-0 right-0 h-22 bg-zinc-950/80 backdrop-blur-3xl border-t border-white/5 px-4 py-3 flex items-center justify-between shadow-[0_-10px_50px_rgba(0,0,0,0.9)] z-9999 animate-in slide-in-from-bottom-full duration-700 sm:hidden cursor-pointer"
          onClick={() => setIsExpanded(true)}
        >
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="size-13 relative shrink-0 rounded-lg overflow-hidden shadow-2xl border border-white/5">
              {currentTrack.url_album && (
                <Image
                  src={currentTrack.url_album.replace(/^\.\//, '/')}
                  alt={currentTrack.album}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="flex flex-col min-w-0 gap-0.5">
              <span className="text-xs font-bold text-white leading-tight truncate">
                {currentTrack.music}
              </span>
              <span className="text-[9px] font-black text-primary uppercase border-l border-primary/30 pl-2 leading-none truncate">
                {currentTrack.artists.join(', ')}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0 ml-2">
            <button
              type="button"
              className="p-1.5 text-white/30 active:scale-95 transition-colors"
              onClick={handlePrev}
            >
              <SkipBack size={18} fill="currentColor" />
            </button>

            <button
              type="button"
              className="size-11 bg-primary text-black rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(242,162,12,0.3)] active:scale-90 transition-all"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <Pause size={18} fill="currentColor" />
              ) : (
                <Play size={18} fill="currentColor" className="ml-0.5" />
              )}
            </button>

            <button
              type="button"
              aria-label="Pular para a próxima música"
              className="p-1.5 text-white/30 active:scale-95 transition-colors"
              onClick={handleNext}
            >
              <SkipForward size={18} fill="currentColor" />
            </button>
          </div>

          {/* Mini progress indicator */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/5">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{
                width: `${(currentTime / (audioRef.current?.duration || 1)) * 100}%`,
              }}
            />
          </div>
        </div>
      )}

      {/* 2. MODO EXPANDIDO (TELA INTEIRA) */}
      <div 
        className={`
          fixed inset-0 bg-background-950 z-10000 flex flex-col p-8 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] sm:hidden
          ${isExpanded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}
        `}
      >
        {/* Background Decorative Blur */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-1/4 -left-20 size-80 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 -right-20 size-80 bg-white/5 rounded-full blur-[100px]" />
        </div>

        {/* Header da Expansão */}
        <div className="flex items-center justify-between relative z-10 mb-12">
            <button 
                type="button"
                aria-label="Fechar player expandido"
                onClick={() => setIsExpanded(false)}
                className="p-2 -ml-2 text-white/40 hover:text-white transition-colors"
            >
                <ChevronDown size={32} />
            </button>
            <div className="flex flex-col items-center">
                <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/20">Tocando de</span>
                <span className="text-[11px] font-bold text-white/60">Sua Biblioteca</span>
            </div>
            <button 
                type="button"
                aria-label="Ver playlist"
                className="p-2 -mr-2 text-white/40"
            >
                <ListMusic size={22} />
            </button>
        </div>

        {/* Capa do Álbum GIGANTE */}
        <div className="flex-1 flex flex-col items-center justify-center relative z-10 max-h-[50vh]">
            <div className="relative aspect-square w-full max-w-[320px] rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/5">
                {currentTrack.url_album && (
                    <Image
                        src={currentTrack.url_album.replace(/^\.\//, '/')}
                        alt={currentTrack.album}
                        fill
                        className={`object-cover transition-transform duration-[20s] linear ${isPlaying ? 'scale-125' : 'scale-100'}`}
                    />
                )}
            </div>
        </div>

        {/* Info da Música */}
        <div className="relative z-10 mt-12 mb-8 text-center space-y-2">
            <h2 className="text-3xl font-black tracking-tighter text-white leading-tight">
                {currentTrack.music}
            </h2>
            <p className="text-base font-bold text-primary tracking-widest uppercase">
                {currentTrack.artists.join(', ')}
            </p>
        </div>

        {/* Barra de Progresso Seekable (Visual apenas por enquanto) */}
        <div className="relative z-10 space-y-2 mb-12">
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-linear-to-r from-primary/60 to-primary shadow-[0_0_15px_rgba(242,162,12,0.4)] transition-all duration-300"
                    style={{ width: `${(currentTime / (audioRef.current?.duration || 1)) * 100}%` }}
                />
            </div>
            <div className="flex justify-between text-[11px] font-bold tabular-nums text-white/30 tracking-widest">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(audioRef.current?.duration || 0)}</span>
            </div>
        </div>

        {/* Controles Principais Grandes */}
        <div className="relative z-10 flex flex-col gap-10 pb-12">
            <div className="flex items-center justify-between">
                <button 
                    type="button"
                    aria-label={isLooping ? "Desativar repetição" : "Ativar repetição"}
                    onClick={toggleLoop}
                    className={`active:scale-95 transition-all ${isLooping ? 'text-primary' : 'text-white/20'}`}
                >
                    <Repeat2 size={24} />
                </button>
                
                <div className="flex items-center gap-8">
                    <button 
                        type="button"
                        aria-label="Música anterior"
                        onClick={handlePrev}
                        className="text-white/60 active:text-white active:scale-90 transition-all"
                    >
                        <SkipBack size={36} fill="currentColor" />
                    </button>
                    
                    <button 
                        type="button"
                        aria-label={isPlaying ? "Pausar música" : "Tocar música"}
                        onClick={togglePlay}
                        className="size-20 bg-primary text-black rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(242,162,12,0.4)] active:scale-90 transition-all"
                    >
                        {isPlaying ? (
                            <Pause size={32} fill="currentColor" />
                        ) : (
                            <Play size={32} fill="currentColor" className="ml-1" />
                        )}
                    </button>
                    
                    <button 
                        type="button"
                        aria-label="Próxima música"
                        onClick={handleNext}
                        className="text-white/60 active:text-white active:scale-90 transition-all"
                    >
                        <SkipForward size={36} fill="currentColor" />
                    </button>
                </div>

                <button 
                    type="button"
                    onClick={toggleMute}
                    className="text-white/20 active:text-primary transition-colors"
                >
                    {isMuted ? <VolumeX size={24} className="text-red-500" /> : <Volume2 size={24} />}
                </button>
            </div>
        </div>
      </div>

      <audio ref={audioRef} src={currentTrack.src} />
    </>
  )
}
