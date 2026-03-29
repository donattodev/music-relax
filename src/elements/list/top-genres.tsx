import { databaseMusic } from '@/data/database-music'
import { Music } from 'lucide-react'
import Link from 'next/link'

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

export function TopGenres() {
  const genresToShow = databaseMusic.slice(0, 5)
  const total = genresToShow.length

  return (
    <div className="p-8 bg-zinc-900/40 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] shadow-2xl relative overflow-hidden transition-all duration-300 group/container h-full">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 size-64 bg-primary/5 blur-[100px] pointer-events-none group-hover/container:bg-primary/10 transition-colors duration-700" />

      <div className="relative z-10 flex flex-col w-full gap-8">
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-end w-full px-2 gap-6 sm:gap-0">
          <div className="space-y-1">
            <h2 className="text-2xl font-black tracking-tight uppercase italic leading-none">
              Descobrir <span className="text-primary">Gêneros</span>
            </h2>
            <p className="text-[10px] text-white/50 font-bold uppercase tracking-[0.3em]">
              Sintonize sua Vibe
            </p>
          </div>
          <Link
            href="/playlists"
            className="w-fit px-6 py-3 border border-white/5 bg-white/5 hover:bg-white/10 rounded-full text-white/60 hover:text-white transition-all text-[9.5px] font-black uppercase tracking-[0.25em] shadow-2xl backdrop-blur-md active:scale-95 md:bg-transparent md:border-0 md:p-0 md:shadow-none md:backdrop-blur-none md:hover:bg-transparent"
          >
            <span className="md:hidden">Explorar Tudo</span>
            <span className="hidden md:block">Ver Mais</span>
          </Link>
        </div>

        <ul className="grid grid-cols-2 gap-4 w-full">
          {databaseMusic.slice(0, 5).map(({ id, genres }, index) => {
            const colors = [
              'from-blue-600/20 to-blue-400/20 text-blue-400 border-blue-400/10',
              'from-purple-600/20 to-purple-400/20 text-purple-400 border-purple-400/10',
              'from-primary/20 to-yellow-400/20 text-primary border-primary/10',
              'from-green-600/20 to-green-400/20 text-green-400 border-green-400/10',
              'from-pink-600/20 to-pink-400/20 text-pink-400 border-pink-400/10',
            ]

            const colorClass = colors[index % colors.length]
            const isLast = index === 4
            const genreSlug = slugify(genres)

            return (
              <li key={id} className={`${isLast ? 'col-span-2' : ''}`}>
                <Link
                  href={`/playlist/${genreSlug}`}
                  className={`
                    relative group flex items-center justify-center p-6 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden
                    bg-linear-to-br ${colorClass}
                    ${isLast ? 'py-8' : ''}
                    hover:scale-[1.02] hover:shadow-2xl w-full
                  `}
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="font-black text-[10px] uppercase tracking-[0.3em] relative z-10">
                    {genres}
                  </span>

                  {/* Subtle background icon/shape */}
                  <div className="absolute -right-2 -bottom-2 size-12 opacity-10 group-hover:scale-150 transition-transform duration-700">
                    <Music size={48} />
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
