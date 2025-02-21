'use client'

import { X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Instagram } from '../icons/social/instagram'
import { Spotify } from '../icons/social/spotify'
import { Youtube } from '../icons/social/youtube'
import { Menu } from '../menu'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Menu
        className="size-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />

      <div
        className={`z-50 fixed top-0 right-0 h-full w-80 bg-white/20 backdrop-blur-lg shadow-lg transform max-sm:w-64 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          className="p-4 text-neutral-100 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <X />
        </button>

        <nav className="p-6 text-neutral-100 max-sm:text-primary-900">
          <ul className="space-y-4">
            <li>
              <Link
                href="https://open.spotify.com/intl-pt/album/17VsdbGONVYMYrIxOemkP0?si=L5PXDwWeQXmoqE2WmHY6cw&nd=1&dlsi=a7b57ee6cb144b97"
                className="flex items-center gap-3"
              >
                <Spotify className="size-6" fill="#ffffff" />
                <span className="font-bold text-lg">Spotify</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/musicrelax_br"
                className="flex items-center gap-3"
              >
                <Instagram className="size-6" fill="#ffffff" />
                <span className="font-bold text-lg">Instagram</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/@musicrelaxcanal"
                className="flex items-center gap-3"
              >
                <Youtube className="size-6" fill="#ffffff" />
                <span className="font-bold text-lg">Youtube</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {isOpen && (
        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        <div
          className="fixed z-20 inset-0 bg-primary/10 bg-opacity-50"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
