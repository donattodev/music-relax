'use client'

import { Hero } from '@/elements/hero/hero'
import { TopArtists } from '@/elements/list/top-artists'
import { TopGenres } from '@/elements/list/top-genres'
import { TopMusic } from '@/elements/list/top-music'
import Sidebar from '@/elements/navs/sidebar'
import { PlayerHome } from '@/elements/player/player-home'
import { useState } from 'react'

export default function Home() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="flex h-screen bg-background transition-all duration-300">
      <Sidebar onCollapseChange={setSidebarCollapsed} />

      <main className="flex-1 overflow-auto transition-all duration-300">
        <Hero />

        <div className="p-4">
          <div
            className={`grid gap-4 max-sm:grid-cols-1 ${
              sidebarCollapsed ? 'grid grid-cols-10' : 'grid grid-cols-10'
            } transition-all duration-300 -mt-20 pb-8`}
          >
            <div className="grid grid-cols-4 col-span-6 gap-4 max-sm:grid-cols-1">
              <TopArtists />
              <TopGenres />
              <TopMusic />
            </div>
            <PlayerHome />
          </div>
        </div>
      </main>
    </div>
  )
}
