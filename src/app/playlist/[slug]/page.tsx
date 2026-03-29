'use client'

import { databaseMusic } from '@/data/database-music'
import Navbar from '@/elements/navs/sidebar'
import { Disc, ListMusic, Play, Plus } from 'lucide-react'
import Image from 'next/image'
import { use, useState } from 'react'

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

export default function PlaylistPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  // Find genre by slug
  const allGenres = Array.from(new Set(databaseMusic.map(m => m.genres)))
  const genre = allGenres.find(g => slugify(g) === slug)

  if (!genre) {
    return (
      <div className="flex h-screen items-center justify-center bg-background-950 text-white">
        <h1 className="text-4xl font-black italic uppercase">
          Gênero não encontrado
        </h1>
      </div>
    )
  }

  const playlistSongs = databaseMusic.filter(m => m.genres === genre)
  const firstSong = playlistSongs[0]

  return (
    <div className="flex h-screen bg-background-950 text-white transition-all duration-300">
      <Navbar onCollapseChange={setSidebarCollapsed} />

      <main className="flex-1 overflow-auto transition-all duration-300 scrollbar-none">
        <div className="relative h-112 flex items-end p-12 overflow-hidden border-b border-white/5">
          {/* Cover Blur Background */}
          <div className="absolute inset-0 z-0 scale-110">
            <Image
              src={firstSong.url_album.replace(/^\.\//, '/')}
              alt={genre}
              fill
              className="object-cover opacity-20 blur-3xl animate-pulse"
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-background-950/80 to-background-950" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-end gap-10 w-full max-w-7xl mx-auto">
            <div className="size-52 md:size-64 rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border-4 border-white/5 relative shrink-0 group">
              <Image
                src={firstSong.url_album.replace(/^\.\//, '/')}
                alt={genre}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="size-20 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                  <Play
                    size={32}
                    fill="currentColor"
                    className="text-primary ml-1"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 flex-1 min-w-0 pb-2">
              <div className="flex items-center gap-3 text-primary">
                <div className="bg-primary/20 p-2.5 rounded-2xl">
                  <ListMusic size={22} />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.4em]">
                  Playlist de Gênero
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85] py-2">
                <span className="text-white">Universe </span>
                <span className="text-primary">{genre}</span>
              </h1>

              <div className="flex items-center gap-6 mt-2">
                <p className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] flex items-center gap-2">
                  <Disc size={16} className="text-primary" />
                  {playlistSongs.length} Faixas para Relaxar
                </p>
                <div className="size-1 bg-white/10 rounded-full" />
                <p className="text-sm font-bold text-white/40 uppercase tracking-[0.2em]">
                  Feito para você
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-12 py-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-8 mb-12">
            <button
              type="button"
              className="bg-primary hover:scale-110 h-16 px-10 rounded-full flex items-center justify-center gap-3 shadow-2xl shadow-primary/20 text-black font-black uppercase tracking-widest transition-all cursor-pointer"
            >
              <Play size={24} fill="currentColor" />
              <span>Ouvir Tudo</span>
            </button>

            <button
              type="button"
              className="size-16 border border-white/10 hover:border-white/20 hover:bg-white/5 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-all cursor-pointer"
            >
              <Plus size={24} />
            </button>
          </div>

          <div className="p-8 bg-zinc-900/40 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] shadow-2xl relative overflow-hidden transition-all duration-300 group/container">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 size-96 bg-primary/5 blur-[120px] pointer-events-none group-hover/container:bg-primary/10 transition-colors duration-700" />

            <div className="relative z-10 flex flex-col w-full gap-2">
              <div className="flex items-center justify-between px-4 pb-6 border-b border-white/5 mb-4">
                <div className="flex items-center gap-4 text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">
                  <span className="w-10 text-center">#</span>
                  <span className="min-w-[300px]">Título</span>
                </div>
              </div>

              {playlistSongs.map((song, index) => (
                <div
                  key={song.id}
                  className="group flex items-center justify-between p-4 rounded-3xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5 cursor-pointer"
                >
                  <div className="flex items-center gap-5 flex-1 min-w-0">
                    <span className="w-10 text-[11px] font-black text-white/10 group-hover:text-primary transition-colors text-center tabular-nums">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>

                    <div className="relative size-16 shrink-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                      <Image
                        fill
                        src={song.url_album_minimal.replace(/^\.\//, '/')}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        alt={song.album}
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <Play
                          size={20}
                          fill="white"
                          className="text-white ml-0.5"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col min-w-0 ml-2 gap-1">
                      <span className="text-lg font-black text-white hover:text-primary transition-colors truncate">
                        {song.music}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] truncate">
                          {song.artists.join(', ')}
                        </span>
                        <span className="size-1 bg-white/10 rounded-full" />
                        <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] truncate">
                          {song.album}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-10">
                    <span className="w-16 text-center text-[13px] font-bold tracking-tighter tabular-nums text-white/20 group-hover:text-primary transition-colors">
                      04:20
                    </span>
                    <div className="w-12 flex justify-end">
                      <button
                        type="button"
                        className="opacity-0 group-hover:opacity-100 size-12 rounded-2xl bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
