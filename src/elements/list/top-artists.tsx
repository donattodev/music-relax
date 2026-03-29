import { databaseMusic } from '@/data/database-music'
import Link from 'next/link'
import { useRef, useState } from 'react'

const slugify = (text: string) => {
  return (
    text
      .toLowerCase()
      .normalize('NFD')
      // biome-ignore lint/suspicious/noMisleadingCharacterClass: <explanation>
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
  )
}

export function TopArtists() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollStart, setScrollStart] = useState(0)

  const handleDragStart = (pageX: number) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setStartX(pageX)
    setScrollStart(scrollRef.current.scrollLeft)
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  const handleDragMove = (pageX: number) => {
    if (!isDragging || !scrollRef.current) return
    const delta = pageX - startX
    scrollRef.current.scrollLeft = scrollStart - delta
  }

  return (
    <div className="p-8 bg-zinc-900/40 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] shadow-2xl relative overflow-hidden transition-all duration-300 group/container">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 size-64 bg-primary/5 blur-[100px] pointer-events-none group-hover/container:bg-primary/10 transition-colors duration-700" />

      <div className="relative z-10 flex flex-col w-full gap-8">
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-end w-full px-2 gap-6 sm:gap-0">
          <div className="space-y-1">
            <h2 className="text-2xl font-black tracking-tight uppercase italic leading-none">
              Artistas em <span className="text-primary">Destaque</span>
            </h2>
            <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.3em]">
              O que há de novo no seu radar
            </p>
          </div>
          <Link
            href="/artistas"
            className="w-fit px-6 py-3 border border-white/5 bg-white/5 hover:bg-white/10 rounded-full text-white/40 hover:text-white transition-all text-[9.5px] font-black uppercase tracking-[0.25em] shadow-2xl backdrop-blur-md active:scale-95 md:bg-transparent md:border-0 md:p-0 md:shadow-none md:backdrop-blur-none md:hover:bg-transparent"
          >
            <span className="md:hidden">Explorar Tudo</span>
            <span className="hidden md:block">Ver Mais</span>
          </Link>
        </div>

        <div className="flex lg:grid lg:grid-cols-5 w-full gap-6 select-none">
          {databaseMusic
            .slice(0, 5)
            .map(({ id, artists, url_album_minimal }) => {
              const mainArtist = artists[0]
              const artistSlug = slugify(mainArtist)

              return (
                <Link
                  key={id}
                  href={`/artistas/${artistSlug}`}
                  className="group shrink-0"
                >
                  <div className="relative space-y-4">
                    <div className="size-28 md:size-32 rounded-full overflow-hidden shadow-2xl border border-white/5 bg-zinc-950 px-px relative group-hover:border-primary/20 transition-all duration-500 mx-auto group-hover:shadow-primary/10">
                      {/* Animated Skeleton Gradient */}
                      <div className="absolute inset-0 bg-linear-to-tr from-zinc-800 via-zinc-950 to-zinc-800 animate-pulse" />

                      <img
                        src={url_album_minimal.replace(/^\.\//, '/')}
                        alt={`Foto de ${artists.join(', ')}`}
                        draggable={false}
                        className="size-full object-cover transition-all duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                      />

                      <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/60 group-hover:to-black/20 transition-all duration-500" />

                      {/* Floating Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-primary/10 backdrop-blur-[2px]">
                        <div className="size-12 bg-primary rounded-full flex items-center justify-center shadow-2xl text-black scale-75 group-hover:scale-100 transition-transform duration-300">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="text-center px-2">
                      <h3 className="font-black text-[11px] text-white/50 group-hover:text-primary transition-all duration-300 truncate w-full uppercase tracking-[0.2em]">
                        {mainArtist}
                      </h3>
                    </div>
                  </div>
                </Link>
              )
            })}
        </div>
      </div>
    </div>
  )
}
