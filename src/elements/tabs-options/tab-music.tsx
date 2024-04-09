import Link from 'next/link'
import Image from 'next/image'
import { ToggleLike } from '../toggle-like'
import foto from '../../../public/image1.jpg'
import foto1 from '../../../public/image2.jpg'
import { SpotifyIcon } from '@/components/icons/spotify'
import { YoutubeIcon } from '@/components/icons/youtube'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

export function TabMusic() {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex w-full gap-4">
        <div>
          <Image
            src={foto}
            width={450}
            height={450}
            alt=""
            className="w-60 rounded-t-lg hover:scale-105"
          />

          <div className="mt-2 flex flex-col gap-1">
            <span className="text-lg font-bold">Ressonância Celestial</span>
            <div className="flex justify-between">
              <span className="text-sm font-bold uppercase text-zinc-500">
                HipHop
              </span>

              <ul className="flex items-center gap-4">
                <li>
                  <ToggleLike />
                </li>

                <li>
                  <Link
                    href="https://open.spotify.com/intl-pt/album/17VsdbGONVYMYrIxOemkP0"
                    target="_blank"
                  >
                    <SpotifyIcon className="w-4" />
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://www.youtube.com/@MusicRelaxCanal"
                    target="_blank"
                  >
                    <YoutubeIcon className="w-4" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <Image
            src={foto1}
            width={450}
            height={450}
            alt=""
            className="w-60 rounded-t-lg hover:scale-105"
          />

          <div className="mt-2 flex flex-col gap-1">
            <span className="text-lg font-bold">Alvorecer Melódico</span>
            <div className="flex justify-between">
              <span className="text-sm font-bold uppercase text-zinc-500">
                HipHop
              </span>
              <ul className="flex items-center gap-4">
                <li>
                  <ToggleLike />
                </li>

                <li>
                  <Link
                    href="https://open.spotify.com/intl-pt/album/17VsdbGONVYMYrIxOemkP0"
                    target="_blank"
                  >
                    <SpotifyIcon className="w-4" />
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://www.youtube.com/@MusicRelaxCanal"
                    target="_blank"
                  >
                    <YoutubeIcon className="w-4" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
