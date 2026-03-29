'use client'

import { Logo } from '@/components/icons/logo'
import {
  Disc,
  Grip,
  Home,
  ListMusic,
  MicVocal,
  PanelLeftClose,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { SocialMedia } from './social-media'

interface SidebarProps {
  onCollapseChange?: (collapsed: boolean) => void
}

export default function Sidebar({ onCollapseChange }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    onCollapseChange?.(collapsed)
  }, [collapsed, onCollapseChange])

  const toggleSidebar = () => setCollapsed(!collapsed)

  const navItems = [
    { label: 'Início', icon: Home, href: '/' },
    { label: 'Álbuns', icon: Disc, href: '/albuns' },
    { label: 'Artistas', icon: MicVocal, href: '/artistas' },
  ]

  const playlists = [
    { label: 'Pop', icon: ListMusic, href: '/playlist/pop' },
    { label: 'Lo-Fi', icon: ListMusic, href: '/playlist/lofi' },
    { label: 'Rock', icon: ListMusic, href: '/playlist/rock' },
  ]

  return (
    <aside
      className={`
        relative h-screen flex flex-col transition-all duration-500 ease-in-out z-50
        bg-zinc-950/98 backdrop-blur-3xl border-r border-white/10 shadow-[20px_0_50px_rgba(0,0,0,0.8)]
        ${collapsed ? 'w-20' : 'w-72'}
        max-sm:hidden
      `}
    >
      {/* Sidebar Header with perfectly centered logo and control */}
      <div className="min-h-[160px] flex flex-col items-center justify-center border-b border-white/5 whitespace-nowrap overflow-hidden">
        <div
          className={`flex flex-col items-center justify-center gap-8 ${collapsed ? '' : 'w-full px-6 flex-row justify-between!'}`}
        >
          <Link
            href="/"
            aria-label="Ir para a página inicial"
            className="flex items-center justify-center transition-transform hover:scale-110"
          >
            <Logo
              onlyIcon={collapsed}
              className={collapsed ? 'w-8 h-8' : 'w-[130px] h-9'}
            />
          </Link>

          <button
            type="button"
            aria-label={collapsed ? "Expandir menu" : "Recolher menu"}
            onClick={toggleSidebar}
            className={`
                    group p-2.5 rounded-2xl transition-all duration-300 shadow-lg cursor-pointer flex items-center justify-center
                    ${
                      collapsed
                        ? 'bg-primary/20 text-primary hover:bg-primary hover:text-black shadow-primary/10'
                        : 'bg-white/5 text-white/40 hover:text-white hover:bg-white/10 border border-white/5'
                    }
                `}
          >
            {collapsed ? (
              <Grip
                size={20}
                className="group-hover:rotate-90 transition-transform duration-500"
              />
            ) : (
              <PanelLeftClose size={18} />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-3 py-10 flex flex-col items-center space-y-12 overflow-visible">
        {/* Main Menu */}
        <ul className="w-full space-y-3">
          {navItems.map(item => {
            const isActive = pathname === item.href
            return (
              <li key={item.label} className="w-full flex justify-center">
                <Link
                  href={item.href}
                  className={`
                    group relative flex items-center transition-all duration-300 rounded-2xl
                    ${collapsed ? 'size-14 justify-center' : 'w-full gap-5 px-6 py-4'}
                    ${
                      isActive
                        ? 'bg-primary shadow-[0_0_30px_rgba(242,162,12,0.4)] text-black'
                        : 'text-white/40 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  <item.icon
                    size={collapsed ? 26 : 22}
                    className={`shrink-0 transition-transform duration-500 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
                  />
                  {!collapsed && (
                    <span className="font-black text-sm tracking-wider transition-opacity duration-300 whitespace-nowrap">
                      {item.label}
                    </span>
                  )}

                  {/* Tooltip when collapsed */}
                  {collapsed && (
                    <span className="absolute left-[70px] px-3 py-1.5 bg-zinc-900 text-white text-[11px] font-bold rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 shadow-2xl border border-white/10 z-100 whitespace-nowrap translate-x-[-10px] group-hover:translate-x-0">
                      {item.label}
                      <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-900 rotate-45 border-l border-b border-white/10" />
                    </span>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Library Section */}
        <div className="w-full space-y-4">
          {!collapsed && (
            <span className="px-6 text-[10px] font-black uppercase tracking-[0.4em] text-white/20 flex items-center gap-2">
              Coleções
            </span>
          )}
          <ul className="w-full flex flex-col items-center space-y-2">
            {playlists.map(item => (
              <li key={item.label} className="w-full flex justify-center">
                <Link
                  href={item.href}
                  className={`
                                group relative flex items-center transition-all duration-300 rounded-xl
                                ${collapsed ? 'size-12 justify-center' : 'w-full gap-5 px-6 py-3'}
                                text-white/30 hover:text-primary hover:bg-primary/5
                            `}
                >
                  <item.icon
                    size={18}
                    className="shrink-0 group-hover:scale-110 transition-transform"
                  />
                  {!collapsed && (
                    <span className="font-bold text-sm transition-opacity duration-300 whitespace-nowrap">
                      {item.label}
                    </span>
                  )}

                  {/* Tooltip when collapsed */}
                  {collapsed && (
                    <span className="absolute left-[65px] px-3 py-1.5 bg-zinc-900 text-white text-[11px] font-bold rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 shadow-2xl border border-white/10 z-100 whitespace-nowrap translate-x-[-10px] group-hover:translate-x-0">
                      {item.label}
                      <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-900 rotate-45 border-l border-b border-white/10" />
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer / Social */}
      <div className="p-6 mt-auto border-t border-white/5 bg-white/1 flex justify-center">
        {!collapsed ? (
          <div className="flex flex-col items-center gap-4 w-full animate-in fade-in slide-in-from-bottom-2 duration-700">
            <SocialMedia />
            <div className="flex flex-col items-center gap-1">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
                Music Relax
              </p>
              <Link
                href="https://donattodev.com.br"
                target="_blank"
                className="text-[9px] font-medium text-white/10 hover:text-primary transition-colors duration-300"
              >
                Desenvolvido por Donatto Dev
              </Link>
            </div>
          </div>
        ) : (
          <Link
            href="https://donattodev.com.br"
            target="_blank"
            className="relative group"
          >
            <div className="size-1.5 bg-primary/20 rounded-full shadow-[0_0_10px_rgba(242,162,12,0.3)] animate-pulse group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
            <span className="absolute left-[30px] top-1/2 -translate-y-1/2 px-2 py-1 bg-zinc-900 text-white text-[8px] font-bold rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 whitespace-nowrap">
              Donatto Dev
            </span>
          </Link>
        )}
      </div>
    </aside>
  )
}
