import { Instagram } from '@/components/icons/social/instagram'
import { Spotify } from '@/components/icons/social/spotify'
import { Youtube } from '@/components/icons/social/youtube'
import { Logotipo } from '@/components/logo'
import { Menu } from '@/components/menu'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-dvh w-full 2xl:p-16 p-12">
      <div className="flex flex-col w-1/2">
        <Menu className="w-8" />

        <section className="flex flex-col 2xl:w-[442px] 2xl:mt-28 w-[464px] mt-16 gap-8">
          <Logotipo className="w-80" />

          <div className="flex flex-col gap-6 w-full">
            <p className='text-white font-sans font-light text-xl'>
              Music Relax é o projeto instrumental de <strong className='font-semibold'>Felippe Donatto</strong>, criado
              para quem busca harmonia e inspiração. Com melodias envolventes e
              suaves, a guitarra se torna um portal para a paz.
            </p>

            <ul className='flex gap-8'>
              <li>
                <Link href="#" target="_blank">
                  <Instagram />
                </Link>
              </li>

              <li>
                <Link href="#" target="_blank">
                  <Spotify />
                </Link>
              </li>

              <li>
                <Link href="#" target="_blank">
                  <Youtube />
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className='bg-[url(/woman-bg.png) bg-cover'/>
    </main>
  )
}
