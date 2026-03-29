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
    <div className="flex h-screen bg-background-950 text-white transition-all duration-300">
      <Sidebar onCollapseChange={setSidebarCollapsed} />

      <main className="flex-1 overflow-auto transition-all duration-300 scrollbar-none">
        <Hero />

        <div className="px-8 pb-12">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 -mt-12 relative z-30">
            <div className="xl:col-span-8 flex flex-col gap-10">
              <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <TopArtists />
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                  <TopGenres />
                </section>
                <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                  <TopMusic />
                </section>
              </div>
            </div>

            <div className="xl:col-span-4 animate-in fade-in slide-in-from-right-4 duration-700 delay-500">
              <PlayerHome />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
