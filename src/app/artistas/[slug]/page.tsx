'use client'

import { databaseMusic } from '@/data/database-music'
import Sidebar from '@/elements/navs/sidebar'
import { Clock, Disc, MicVocal, Play, Plus } from 'lucide-react'
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

const formatDuration = (seconds: number) => {
  const min = Math.floor(seconds / 60)
  const sec = String(seconds % 60).padStart(2, '0')
  return `${min}:${sec}`
}

export default function ArtistDetailPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  // Find artist and their songs
  const allArtists = Array.from(
    new Set(databaseMusic.flatMap(music => music.artists))
  )
  const artistName = allArtists.find(a => slugify(a) === slug)

  if (!artistName) {
    return (
      <div className="flex h-screen items-center justify-center bg-background-950 text-white">
        <h1 className="text-4xl font-black italic">Artista não encontrado</h1>
      </div>
    )
  }

  const artistSongs = databaseMusic.filter(m => m.artists.includes(artistName))
  const firstSong = artistSongs[0]

  return (
    <div className="flex h-screen bg-background-950 text-white transition-all duration-300">
      <Sidebar onCollapseChange={setSidebarCollapsed} />

      <main className="flex-1 overflow-auto transition-all duration-300 scrollbar-none">
        <div className="relative h-96 flex items-end p-12 overflow-hidden border-b border-white/5">
          {/* Cover Blur Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src={firstSong.url_album.replace(/^\.\//, '/')}
              alt={artistName}
              fill
              className="object-cover opacity-20 blur-3xl scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-background-950/80 to-background-950" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-end gap-10 w-full max-w-7xl mx-auto">
            <div className="size-52 md:size-64 rounded-full overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border-4 border-white/5 relative shrink-0">
              <Image
                src={firstSong.url_album.replace(/^\.\//, '/')}
                alt={artistName}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
              />
            </div>

            <div className="flex flex-col gap-5 flex-1 min-w-0 pb-2">
              <div className="flex items-center gap-3 text-primary">
                <div className="bg-primary/20 p-2 rounded-xl">
                  <MicVocal size={22} />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.4em]">
                  Artista Verificado
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none truncate">
                {artistName}
              </h1>

              <div className="flex items-center gap-6 mt-2">
                <p className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] flex items-center gap-2">
                  <Disc size={16} className="text-primary" />
                  {artistSongs.length} Faixas Publicadas
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-12 py-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-8 mb-12">
            <button
              type="button"
              className="bg-primary size-16 rounded-full flex items-center justify-center hover:scale-110 shadow-2xl shadow-primary/20 text-black transition-all cursor-pointer"
            >
              <Play size={28} fill="currentColor" className="ml-1" />
            </button>

            <button
              type="button"
              className="px-8 py-3.5 border border-white/10 hover:border-white/20 hover:bg-white/5 rounded-full text-white/50 hover:text-white transition-all text-xs font-black uppercase tracking-[0.2em]"
            >
              Seguir
            </button>
          </div>

          <div className="p-8 bg-zinc-900/40 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] shadow-2xl relative overflow-hidden transition-all duration-300 group/container h-full">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 size-64 bg-primary/5 blur-[100px] pointer-events-none group-hover/container:bg-primary/10 transition-colors duration-700" />

            <div className="relative z-10 flex flex-col w-full gap-8">
              <div className="flex items-center justify-between px-4 pb-4 border-b border-white/5">
                <div className="flex items-center gap-4 text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">
                  <span className="w-10 text-center">#</span>
                  <span className="min-w-[300px]">Título</span>
                </div>
                <div className="flex items-center gap-10 text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">
                  <span className="hidden md:block w-32">Álbum</span>
                  <span className="w-16 text-center">
                    <Clock size={14} />
                  </span>
                  <span className="w-10" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {artistSongs.map((song, index) => (
                  <div
                    key={song.id}
                    className="group flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5"
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <span className="w-10 text-xs font-black text-white/10 group-hover:text-primary transition-colors text-center tabular-nums">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>

                      <div className="relative size-14 shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                        <Image
                          fill
                          src={song.url_album_minimal.replace(/^\.\//, '/')}
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          alt={song.album}
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                          <Play
                            size={18}
                            fill="white"
                            className="text-white ml-0.5"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col min-w-0 ml-2">
                        <span className="text-base font-black text-white hover:text-primary transition-colors truncate">
                          {song.music}
                        </span>
                        <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
                          Explícito
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-10">
                      <span className="hidden md:block w-32 text-[11px] font-black text-white/20 uppercase tracking-widest truncate">
                        {song.album}
                      </span>
                      <span className="w-16 text-center text-[12px] font-bold tabular-nums text-white/40 group-hover:text-primary transition-colors">
                        {formatDuration(song.duration)}
                      </span>
                      <div className="w-10 flex justify-end">
                        <button
                          type="button"
                          className="opacity-0 group-hover:opacity-100 p-2.5 rounded-xl bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
