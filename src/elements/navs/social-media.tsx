import { Github } from '@/components/icons/github'
import { Instagram } from '@/components/icons/instagram'
import { Spotify } from '@/components/icons/spotify'
import { YouTube } from '@/components/icons/youtube'
import Link from 'next/link'

export function SocialMedia() {
  return (
    <ul className="flex w-full justify-start gap-6 mt-4">
      <Link href="https://www.instagram.com/musicrelax_br/" target="_blank">
        <li>
          <Instagram className="w-5" />
        </li>
      </Link>

      <Link href="https://github.com/donattodev/music-relax" target="_blank">
        <li>
          <Github className="w-5" />
        </li>
      </Link>

      <Link href="https://www.youtube.com/@MusicRelaxCanal" target="_blank">
        <li>
          <YouTube className="w-5" />
        </li>
      </Link>
      <Link
        href="https://open.spotify.com/intl-pt/artist/5SAkIN3MFTW994ukhn1C67?fbclid=PAZXh0bgNhZW0CMTEAAaf1jKhuyBLTSjCXoZ_j5OmoRGCYHmtvFKBx330kpfOVZ5m40QARucv8N35P0g_aem_MI8IkCsPw_atkdmiv5yH5A"
        target="_blank"
      >
        <li>
          <Spotify className="w-5" />
        </li>
      </Link>
    </ul>
  )
}
