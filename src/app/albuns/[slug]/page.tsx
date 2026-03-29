'use client'

import { Heading } from '@/components/ui/heading'

import { databaseMusic } from '@/data/database-music'
import Sidebar from '@/elements/navs/sidebar'
import { Clock, Play, Plus, Share2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'

const formatDuration = (seconds: number) => {
  const min = Math.floor(seconds / 60)
  const sec = String(seconds % 60).padStart(2, '0')
  return `${min}:${sec}`
}

export default function AlbumDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  // Find all tracks for this album
  const albumTracks = databaseMusic.filter(m => m.slug === slug)

  if (albumTracks.length === 0) {
    return (
      <div className="flex h-screen bg-background-950 text-white items-center justify-center flex-col gap-4">
        <Heading size="lg">Álbum não encontrado</Heading>
        <Link href="/albuns" className="text-primary hover:underline">
          Voltar para meus álbuns
        </Link>
      </div>
    )
  }

  const album = albumTracks[0]
  const totalDuration = albumTracks.reduce(
    (acc, curr) => acc + curr.duration,
    0
  )
  const totalTracks = albumTracks.length

  return (
    <div className="flex h-screen bg-background-950 text-white overflow-hidden">
      <Sidebar onCollapseChange={setSidebarCollapsed} />

      <main className="flex-1 overflow-auto">
        {/* Banner Section */}
        <div className="relative h-[250px] md:h-[350px] bg-linear-to-b from-primary/20 to-background-950 p-8 flex items-end">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-8 w-full z-10">
            <div className="relative size-48 md:size-64 rounded-lg overflow-hidden shadow-2xl shrink-0 group">
              <Image
                src={album.url_album.replace(/^\.\//, '/')}
                alt={album.album}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-primary size-14 rounded-full flex items-center justify-center shadow-lg">
                  <Play size={28} className="fill-black text-black ml-1" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary">
                Álbum
              </span>
              <Heading
                size="lg"
                className="leading-tight md:text-6xl wrap-break-word"
              >
                {album.album}
              </Heading>
              <div className="flex items-center gap-2 flex-wrap text-sm md:text-base font-medium mt-2">
                <span className="text-white hover:underline cursor-pointer">
                  {album.artists.join(', ')}
                </span>
                <span className="text-white/40">•</span>
                <span className="text-white/60">{totalTracks} músicas</span>
                <span className="text-white/40">•</span>
                <span className="text-white/60">
                  Total {Math.floor(totalDuration / 60)} min{' '}
                  {totalDuration % 60} seg
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar Section */}
        <div className="flex items-center gap-6 p-8">
          <button
            type="button"
            className="bg-primary size-14 rounded-full flex items-center justify-center hover:scale-105 transition-all shadow-xl"
          >
            <Play size={24} className="fill-black text-black ml-1" />
          </button>
          <button
            type="button"
            className="text-white/60 hover:text-white transition-colors"
          >
            <Plus size={32} />
          </button>
          <button
            type="button"
            className="text-white/60 hover:text-white transition-colors"
          >
            <Share2 size={24} />
          </button>
        </div>

        {/* Tracks Section */}
        <div className="px-8 pb-12">
          <div className="grid grid-cols-[auto_1fr_auto] gap-4 mb-4 pb-2 border-b border-white/10 text-white/40 text-sm font-medium uppercase tracking-wider px-4">
            <span className="w-8 text-center">#</span>
            <span>Título</span>
            <Clock size={16} />
          </div>

          <ul className="flex flex-col">
            {albumTracks.map((track, index) => (
              <li
                key={track.id}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors group cursor-pointer"
              >
                <span className="w-8 text-center text-white/40 group-hover:text-primary font-medium transition-colors">
                  {index + 1}
                </span>
                <div className="flex flex-col">
                  <span className="text-white font-medium truncate group-hover:text-primary transition-colors">
                    {track.music}
                  </span>
                  <span className="text-sm text-white/40 truncate group-hover:text-white/60 transition-colors">
                    {track.artists.join(', ')}
                  </span>
                </div>
                <span className="text-sm text-white/40 group-hover:text-white/60 font-medium tabular-nums transition-colors">
                  {formatDuration(track.duration)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}
