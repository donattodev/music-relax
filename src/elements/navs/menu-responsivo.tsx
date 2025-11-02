'use client'

import { Logo } from '@/components/icons/logo'
import { Disc, ListMusic, MicVocal, Music, Radio, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

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

        <ul className="flex flex-col p-4 space-y-4">
          <li>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3"
            >
              <Music size={20} />
              <span>Explore</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3"
            >
              <Disc size={20} />
              <span>Albuns</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3"
            >
              <MicVocal size={20} />
              <span>Artists</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3"
            >
              <Radio size={20} />
              <span>Live</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
