import { Instagram } from '@/components/icons/social/instagram'
import { Spotify } from '@/components/icons/social/spotify'
import { Youtube } from '@/components/icons/social/youtube'
import { Logotipo } from '@/components/logo'
import { Navbar } from '@/components/navbar/navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-dvh w-full bg-[url(/text-bgf.svg)] bg-cover bg-center">
      <div className="flex flex-col w-1/2 2xl:p-16 p-12 max-sm:p-6">
        <Navbar />

        <section className="flex flex-col 2xl:w-[442px] 2xl:mt-28 w-[464px] mt-12 gap-8 max-sm:w-80">
          <Logotipo className="w-72 max-sm:w-56" />

          <div className="flex flex-col gap-6 w-full">
            <p className="text-white font-sans font-light text-lg max-sm:text-base max-sm:text-justify">
              Music Relax é o projeto instrumental de{' '}
              <strong className="font-semibold">
                <Link href="https://donattodev.com.br/links" target='_blank'>
                  Felippe Donatto
                </Link>
              </strong>
              , criado para quem busca harmonia e inspiração. Com melodias
              envolventes e suaves, a guitarra se torna um portal para a paz.
            </p>

            <ul className="flex gap-8">
              <li>
                <Link
                  href="https://www.instagram.com/musicrelax_br"
                  target="_blank"
                >
                  <Instagram className="size-6" fill="#fff" />
                </Link>
              </li>

              <li>
                <Link
                  href="https://open.spotify.com/intl-pt/album/17VsdbGONVYMYrIxOemkP0?si=L5PXDwWeQXmoqE2WmHY6cw&nd=1&dlsi=a7b57ee6cb144b97"
                  target="_blank"
                >
                  <Spotify className="size-6" fill="#fff" />
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.youtube.com/@musicrelaxcanal"
                  target="_blank"
                >
                  <Youtube className="size-6" fill="#fff" />
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="w-1/2">
        <Image
          src="/bg-woman.png"
          className="fixed bottom-0 right-1 w-[547px] max-sm:hidden"
          alt=""
          width={807}
          height={400}
        />

        <Image
          src="/bg-woman-mobile.png"
          className="fixed bottom-0 right-0 md:hidden w-[547px] -z-10"
          alt=""
          width={807}
          height={400}
        />
      </div>
    </main>
  )
}
