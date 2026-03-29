'use client'

import { Logo } from '@/components/icons/logo'
import { Disc, Home, ListMusic, Menu, MicVocal, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export function MenuResponsivo() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

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
    <>
      <button
        type="button"
        aria-label="Abrir menu de navegação"
        onClick={() => setIsOpen(true)}
        className="sm:hidden p-2 text-white/60 hover:text-white transition-all active:scale-90 cursor-pointer"
      >
        <Menu size={28} />
      </button>

      {mounted &&
        createPortal(
          <div
            className={`
            fixed inset-0 w-full h-dvh z-999999 bg-black transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col sm:hidden
            ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'}
          `}
          >
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
              <div className="absolute top-[-10%] right-[-10%] size-96 bg-primary/20 rounded-full blur-[120px]" />
              <div className="absolute bottom-[20%] left-[-10%] size-80 bg-white/5 rounded-full blur-[100px]" />
            </div>

            <div className="flex items-center justify-between p-8 relative z-10">
              <Link href="/" onClick={() => setIsOpen(false)} aria-label="Ir para a página inicial">
                <Logo className="w-32 h-auto" />
              </Link>
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setIsOpen(false)}
                className="size-12 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center text-white/60 hover:text-white transition-all active:rotate-90"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-10 relative z-10 scrollbar-none">
              <div className="space-y-12">
                <div className="space-y-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
                    Menu Principal
                  </span>
                  <ul className="space-y-3">
                    {navItems.map(item => {
                      const isActive = pathname === item.href
                      return (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className={`
                            flex items-center gap-5 px-6 py-5 rounded-3xl transition-all duration-300
                            ${
                              isActive
                                ? 'bg-primary text-black shadow-[0_15px_40px_rgba(242,162,12,0.3)]'
                                : 'bg-white/5 text-white/50 hover:text-white'
                            }
                          `}
                          >
                            <item.icon
                              size={22}
                              className={isActive ? 'animate-pulse' : ''}
                            />
                            <span className="font-black text-base tracking-wider uppercase italic">
                              {item.label}
                            </span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>

                <div className="space-y-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
                    Coleções Populares
                  </span>
                  <ul className="space-y-3">
                    {playlists.map(item => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="flex items-center gap-5 px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white/40 hover:text-primary transition-all"
                        >
                          <item.icon size={18} />
                          <span className="font-bold text-sm tracking-wide">
                            {item.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
