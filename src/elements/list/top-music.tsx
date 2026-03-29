import { databaseMusic } from '@/data/database-music'
import { Play, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const formatDuration = (seconds: number) => {
  const min = Math.floor(seconds / 60)
  const sec = String(seconds % 60).padStart(2, '0')
  return `${min}:${sec}`
}

export function TopMusic() {
  return (
    <div className="p-8 bg-zinc-900/40 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] shadow-2xl relative overflow-hidden transition-all duration-300 group/container h-full">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 size-64 bg-primary/5 blur-[100px] pointer-events-none group-hover/container:bg-primary/10 transition-colors duration-700" />

      <div className="relative z-10 flex flex-col w-full gap-8">
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-end w-full px-2 gap-6 sm:gap-0">
          <div className="space-y-1">
            <h2 className="text-2xl font-black tracking-tight uppercase italic leading-none">
              Suas <span className="text-primary">Favoritas</span>
            </h2>
            <p className="text-[10px] text-white/50 font-bold uppercase tracking-[0.3em]">
              Sintonize sua Vibe
            </p>
          </div>
          <Link
            href="/albuns"
            aria-label="Ver mais músicas"
            className="w-fit px-6 py-3 border border-white/5 bg-white/5 hover:bg-white/10 rounded-full text-white/60 hover:text-white transition-all text-[9.5px] font-black uppercase tracking-[0.25em] shadow-2xl backdrop-blur-md active:scale-95 md:bg-transparent md:border-0 md:p-0 md:shadow-none md:backdrop-blur-none md:hover:bg-transparent"
          >
            <span className="md:hidden">Explorar Músicas</span>
            <span className="hidden md:block">Ver Mais</span>
          </Link>
        </div>

        <div className="flex flex-col gap-3 w-full">
          {databaseMusic
            .slice(0, 5)
            .map(
              (
                {
                  id,
                  music,
                  artists,
                  album,
                  slug,
                  url_album_minimal,
                  duration,
                },
                index
              ) => (
                <div
                  key={id}
                  className="group flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <span className="text-xs font-black text-white/10 group-hover:text-primary transition-colors w-4 text-center">
                      {index + 1}
                    </span>

                    <div className="relative size-12 shrink-0 rounded-lg overflow-hidden border border-white/5">
                      <Image
                        fill
                        src={url_album_minimal.replace(/^\.\//, '/')}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        alt={album}
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <Play
                          size={16}
                          fill="white"
                          className="text-white ml-0.5"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col min-w-0">
                      <Link
                        href={`/albuns/${slug}`}
                        className="text-sm font-black text-white hover:text-primary transition-colors truncate"
                      >
                        {music}
                      </Link>
                      <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest truncate">
                        {artists.join(', ')}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <span className="hidden md:block text-[10px] font-bold text-white/50 uppercase tracking-widest group-hover:text-white/70 transition-colors">
                      {album}
                    </span>
                    <span className="text-[11px] font-bold tabular-nums text-white/60 group-hover:text-primary transition-colors">
                      {formatDuration(duration)}
                    </span>
                    <button
                      type="button"
                      aria-label="Adicionar à minha biblioteca"
                      className="opacity-0 group-hover:opacity-100 p-2 rounded-lg bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </div>
  )
}
