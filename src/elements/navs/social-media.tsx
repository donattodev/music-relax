import { Github } from '@/components/icons/github'
import { Instagram } from '@/components/icons/instagram'
import { Spotify } from '@/components/icons/spotify'
import { YouTube } from '@/components/icons/youtube'
import { Globe } from 'lucide-react'
import Link from 'next/link'

export function SocialMedia() {
  const socials = [
    { icon: Globe, href: "https://donattodev.com.br", label: "Portfolio Donatto Dev" },
    { icon: Instagram, href: "https://www.instagram.com/musicrelax_br/", label: "Instagram" },
    { icon: Github, href: "https://github.com/donattodev/music-relax", label: "Github" },
    { icon: YouTube, href: "https://www.youtube.com/@MusicRelaxCanal", label: "YouTube" },
    { icon: Spotify, href: "https://open.spotify.com/intl-pt/artist/5SAkIN3MFTW994ukhn1C67", label: "Spotify" },
  ]

  return (
    <ul className="flex items-center gap-3 px-2 flex-nowrap whitespace-nowrap">
      {socials.map((social) => (
        <li key={social.label}>
          <Link 
            href={social.href} 
            target="_blank" 
            title={social.label}
            className="group flex items-center justify-center size-8 rounded-lg bg-white/5 hover:bg-primary transition-all duration-300 transform hover:-translate-y-1"
          >
            <social.icon className="w-4 group-hover:text-black transition-colors duration-300" />
          </Link>
        </li>
      ))}
    </ul>
  )
}
