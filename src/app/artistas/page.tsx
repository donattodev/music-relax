'use client'

import { databaseMusic } from '@/data/database-music'
import Sidebar from '@/elements/navs/sidebar'
import { ChevronLeft, ChevronRight, MicVocal, Play, Search } from 'lucide-react'
import Link from 'next/link'
import { useMemo, useState } from 'react'

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

export default function ArtistsPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  // Extract unique artists and filter them
  const filteredArtists = useMemo(() => {
    const allArtists = Array.from(
      new Set(databaseMusic.flatMap(music => music.artists))
    )
    if (!searchQuery) return allArtists
    return allArtists.filter(artist =>
      artist.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  // Pagination logic
  const totalPages = Math.ceil(filteredArtists.length / itemsPerPage)
  const paginatedArtists = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return filteredArtists.slice(start, start + itemsPerPage)
  }, [filteredArtists, currentPage])

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
                <MicVocal size={20} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">
                  Navegar
                </span>
              </div>
              <h1 className="text-5xl font-black italic uppercase tracking-tighter">
                Todos os <span className="text-primary">Artistas</span>
              </h1>
            </div>

            <div className="relative group max-w-md w-full">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors"
                size={18}
              />
              <input
                type="text"
                placeholder="Buscar artista..."
                className="w-full h-14 bg-zinc-900/60 border border-white/5 rounded-2xl pl-12 pr-4 text-sm font-bold placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all focus:shadow-[0_0_30px_rgba(242,162,12,0.1)]"
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1)
                }}
              />
            </div>
          </div>
        </div>

        <div className="px-10 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {paginatedArtists.map(artist => {
              const artistMusic = databaseMusic.find(m =>
                m.artists.includes(artist)
              )
              const artistSlug = slugify(artist)

              return (
                <Link
                  key={artist}
                  href={`/artistas/${artistSlug}`}
                  className="group"
                >
                  <div className="p-6 bg-zinc-900/40 backdrop-blur-3xl border border-white/5 rounded-4xl hover:bg-zinc-900/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl h-full flex flex-col items-center">
                    <div className="relative size-28 md:size-32 rounded-full overflow-hidden mb-5 border-2 border-white/5 group-hover:border-primary/30 transition-all duration-500 shadow-2xl shrink-0 group-hover:shadow-primary/10">
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-linear-to-tr from-zinc-800 via-zinc-950 to-zinc-800 animate-pulse" />

                      <img
                        src={artistMusic?.url_album_minimal.replace(
                          /^\.\//,
                          '/'
                        )}
                        alt={artist}
                        className="size-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-black/40 group-hover:bg-primary/10 transition-colors" />

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <div className="size-12 bg-primary rounded-full flex items-center justify-center shadow-2xl text-black">
                          <Play size={20} fill="currentColor" />
                        </div>
                      </div>
                    </div>

                    <div className="text-center space-y-1 w-full">
                      <h3 className="font-black text-[11px] uppercase tracking-widest text-white/50 group-hover:text-primary transition-colors truncate">
                        {artist}
                      </h3>
                      <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
                        {
                          databaseMusic.filter(m => m.artists.includes(artist))
                            .length
                        }{' '}
                        Obras
                      </p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex items-center justify-center gap-4">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                className="size-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i + 1}
                    type="button"
                    onClick={() => setCurrentPage(i + 1)}
                    className={`size-12 rounded-xl font-black text-xs transition-all ${
                      currentPage === i + 1
                        ? 'bg-primary text-black shadow-lg shadow-primary/20 scale-110'
                        : 'bg-white/5 text-white/30 hover:bg-white/10'
                    }`}
                  >
                    {(i + 1).toString().padStart(2, '0')}
                  </button>
                ))}
              </div>

              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage(prev => Math.min(totalPages, prev + 1))
                }
                className="size-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
