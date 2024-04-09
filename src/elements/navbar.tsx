import Link from 'next/link'
import { SignInButton } from './sign-in-button'
import { SpotifyIcon } from '@/components/icons/spotify'
import { YoutubeIcon } from '@/components/icons/youtube'

export function Navbar() {
  return (
    <nav className="move mx-auto flex w-full max-w-6xl items-center justify-between rounded-lg border-2 border-zinc-500/40 px-8 py-6 max-sm:px-4">
      <Link
        href="/"
        className="color font-title text-2xl font-bold uppercase leading-5"
      >
        Music Relax
      </Link>
      <ul className="flex items-center gap-6 text-sm font-bold uppercase max-sm:hidden">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/music">Músicas</Link>
        </li>

        <li>
          <Link href="/albuns">Ábuns</Link>
        </li>

        <li>
          <SignInButton />
        </li>

        <li>
          <Link
            href="https://open.spotify.com/intl-pt/album/17VsdbGONVYMYrIxOemkP0"
            target="_blank"
          >
            <SpotifyIcon />
          </Link>
        </li>

        <li>
          <Link href="https://www.youtube.com/@MusicRelaxCanal" target="_blank">
            <YoutubeIcon />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
