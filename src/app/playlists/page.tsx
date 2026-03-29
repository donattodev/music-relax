'use client'

import { databaseMusic } from '@/data/database-music'
import Sidebar from '@/elements/navs/sidebar'
import { ListMusic, Music, Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

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

export default function AllPlaylistsPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  // Extract unique genres
  const allGenres = Array.from(new Set(databaseMusic.map(m => m.genres)))

  return (
    <div className="flex h-screen bg-background-950 text-white transition-all duration-300 overflow-hidden">
      <Sidebar onCollapseChange={setSidebarCollapsed} />

      <main className="flex-1 overflow-auto transition-all duration-300 scrollbar-none pb-20">
        <div className="relative h-64 flex items-end p-10 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-primary/10 to-background-950 z-0" />
          <div className="absolute top-0 right-0 size-96 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 w-full flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-primary">
                <ListMusic size={20} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">
                  Bibliotecas
                </span>
              </div>
              <h1 className="text-5xl font-black italic uppercase tracking-tighter">
                Nossas <span className="text-primary">Playlists</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="px-10 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allGenres.map((genre, index) => {
              const count = databaseMusic.filter(m => m.genres === genre).length
              const genreSongs = databaseMusic.filter(m => m.genres === genre)
              const colors = [
                'from-blue-600/40 to-blue-900/40 border-blue-500/20',
                'from-purple-600/40 to-purple-900/40 border-purple-500/20',
                'from-primary/40 to-yellow-900/40 border-primary/20',
                'from-green-600/40 to-green-900/40 border-green-500/20',
                'from-pink-600/40 to-pink-900/40 border-pink-500/20',
              ]
              const colorClass = colors[index % colors.length]

              return (
                <Link
                  key={genre}
                  href={`/playlist/${slugify(genre)}`}
                  className={`
                    group relative flex flex-col gap-6 p-8 rounded-4xl border overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl
                    bg-linear-to-br ${colorClass} backdrop-blur-3xl
                  `}
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex justify-between items-start relative z-10">
                    <div className="size-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-primary transition-all duration-500 group-hover:rotate-12">
                      <Music
                        size={32}
                        className="text-white group-hover:text-black transition-colors"
                      />
                    </div>
                    <div className="size-12 bg-white/5 rounded-full flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                      <Play size={20} fill="currentColor" />
                    </div>
                  </div>

                  <div className="space-y-1 relative z-10">
                    <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white group-hover:text-primary transition-colors">
                      Universe {genre}
                    </h2>
                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest">
                      {count} Músicas Selecionadas
                    </p>
                  </div>

                  {/* Album stacking effect */}
                  <div className="flex items-center -space-x-4 relative z-10">
                    {genreSongs.slice(0, 3).map((song, i) => (
                      <div
                        key={song.id}
                        className="size-10 rounded-full border-2 border-zinc-950 overflow-hidden shadow-xl transform"
                        style={{ zIndex: 3 - i }}
                      >
                        <Image
                          src={song.url_album_minimal.replace(/^\.\//, '/')}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Decorative background shape */}
                  <div className="absolute -right-12 -bottom-12 size-48 opacity-10 group-hover:opacity-20 transition-all duration-700 group-hover:scale-125">
                    <ListMusic size={200} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
