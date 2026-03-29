'use client'

import { Logo } from '@/components/icons/logo'
import { Disc, ListMusic, MicVocal, Music, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { SocialMedia } from './social-media'

export function MenuResponsivo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="sm:hidden p-2 cursor-pointer"
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
      >
        <ListMusic size={24} />
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/70 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full bg-neutral-950 w-[90%] max-w-xs z-50 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <span className="font-bold text-lg">
            <Logo className="w-[157px]" />
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
          >
            <X size={20} className="text-neutral-400 cursor-pointer" />
          </button>
        </div>

        <ul className="flex flex-col p-6 space-y-6">
          <li>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-4 text-white/60 hover:text-primary transition-colors font-medium"
            >
              <Music size={22} className="text-primary" />
              <span>Explore</span>
            </Link>
          </li>
          <li>
            <Link
              href="/albuns"
              onClick={() => setOpen(false)}
              className="flex items-center gap-4 text-white/60 hover:text-primary transition-colors font-medium"
            >
              <Disc size={22} />
              <span>Álbuns</span>
            </Link>
          </li>
          <li>
            <Link
              href="/artistas"
              onClick={() => setOpen(false)}
              className="flex items-center gap-4 text-white/60 hover:text-primary transition-colors font-medium"
            >
              <MicVocal size={22} />
              <span>Artistas</span>
            </Link>
          </li>
        </ul>

        <div className="mt-auto p-6 border-t border-white/5 space-y-6 bg-white/2">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold">Social</span>
            <SocialMedia />
          </div>
          
          <div className="flex flex-col gap-2">
            <p className="text-[10px] uppercase tracking-widest text-white/10 font-black">Music Relax</p>
            <Link 
              href="https://donattodev.com.br" 
              target="_blank"
              className="text-[11px] text-white/30 hover:text-primary transition-colors"
            >
              Portfolio Felippe Donatto
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
