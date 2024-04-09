import Link from 'next/link'
import { HeartIcon } from '@/components/icons/heart'
import { RadioIcon } from '@/components/icons/radio'
import { DonwloadgIcon } from '@/components/icons/donwload'
import { LibraryBigIcon } from '@/components/icons/library-big'
import { AudioLinesIcon } from '@/components/icons/audio-lines'

export function Sidebar() {
  return (
    <div className="move col-span-2 flex w-full flex-col gap-6 max-sm:col-span-6">
      <div className="w-full rounded-lg border-2 border-zinc-500/40 p-6">
        <ul className="flex flex-col gap-6 text-sm uppercase">
          <li className="flex items-center gap-3 font-bold">
            <RadioIcon className="w-5" />
            <span className="text-zinc-500">Ouça agora</span>
          </li>
          <li>
            <Link
              href="/favoritas"
              className="flex items-center gap-3 font-bold"
            >
              <HeartIcon className="w-5" />
              <span className="text-zinc-500">Favoritas</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="rounded-lg border-2 border-zinc-500/40 p-6">
        <ul className="flex flex-col gap-6 text-sm uppercase">
          <li>
            <Link href="/albuns" className="flex items-center gap-3 font-bold">
              <LibraryBigIcon className="w-5" />
              <span className="text-zinc-500">Álbuns</span>
            </Link>
          </li>
          <li>
            <Link href="/music" className="flex items-center gap-3 font-bold">
              <AudioLinesIcon className="w-5" />
              <span className="text-zinc-500">Musicas</span>
            </Link>
          </li>
          <li className="flex items-center gap-3 font-bold">
            <RadioIcon className="w-5" />
            <span className="text-zinc-500">Ao vivo</span>
          </li>
          <li className="flex cursor-not-allowed items-center gap-3 font-bold">
            <DonwloadgIcon className="w-5" />
            <span className="text-zinc-500">Donwload</span>
          </li>
        </ul>
      </div>

      <div className="rounded-lg border-2 border-zinc-500/40 px-3 py-6 max-sm:hidden">
        <Link
          href="https://donattodev.com.br"
          target="_blank"
          className="text-xs font-bold uppercase text-zinc-500 "
        >
          Criado por{' '}
          <span className="flex items-center gap-2 text-pink-500 transition-all hover:text-pink-700">
            Felippe Donatto <HeartIcon className="w-4" />
          </span>
        </Link>
      </div>
    </div>
  )
}
