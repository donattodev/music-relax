'use client'

import { databaseMusic } from '@/data/database-music'
import Sidebar from '@/elements/navs/sidebar'
import { ChevronLeft, ChevronRight, Disc, Play, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'

export default function AlbunsListPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  const filteredAlbums = useMemo(() => {
    const albums = Array.from(new Set(databaseMusic.map(m => m.album)))
      .map(albumName => databaseMusic.find(m => m.album === albumName))
      .filter((a): a is (typeof databaseMusic)[0] => a !== undefined)

    if (!searchQuery) return albums

    return albums.filter(
      album =>
        album.album.toLowerCase().includes(searchQuery.toLowerCase()) ||
        album.artists.some(artist =>
          artist.toLowerCase().includes(searchQuery.toLowerCase())
        )
    )
  }, [searchQuery])

  // Pagination logic
  const totalPages = Math.ceil(filteredAlbums.length / itemsPerPage)
  const paginatedAlbums = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return filteredAlbums.slice(start, start + itemsPerPage)
  }, [filteredAlbums, currentPage])

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
                <Disc size={20} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">
                  Explorar
                </span>
              </div>
              <h1 className="text-5xl font-black italic uppercase tracking-tighter">
                Coleção de <span className="text-primary">Álbuns</span>
              </h1>
            </div>

            <div className="relative group max-w-md w-full">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors"
                size={18}
              />
              <input
                type="text"
                placeholder="Buscar álbum ou artista..."
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
            {paginatedAlbums.map(album => (
              <Link
                key={album.id}
                href={`/albuns/${album.slug}`}
                className="group flex flex-col gap-5 p-5 bg-zinc-900/40 backdrop-blur-3xl border border-white/5 rounded-4xl hover:bg-zinc-900/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                  <Image
                    src={album.url_album.replace(/^\.\//, '/')}
                    alt={album.album}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-primary size-14 rounded-full flex items-center justify-center shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <Play
                        size={24}
                        className="fill-black text-black ml-1 scale-90 group-hover:scale-100 transition-transform"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1 px-1">
                  <span className="font-black text-sm uppercase tracking-widest text-white/60 group-hover:text-primary transition-colors truncate">
                    {album.album}
                  </span>
                  <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest truncate">
                    {album.artists.join(', ')}
                  </span>
                </div>
              </Link>
            ))}
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
