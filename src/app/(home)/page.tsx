import { Instagram } from '@/components/icons/social/instagram'
import { Spotify } from '@/components/icons/social/spotify'
import { Youtube } from '@/components/icons/social/youtube'
import { Logotipo } from '@/components/logo'
import { Menu } from '@/components/menu'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-dvh w-full ">
      <div className="flex flex-col w-1/2 2xl:p-16 p-12 max-sm:p-6">
        <Menu className="size-6" />

        <section className="flex flex-col 2xl:w-[442px] 2xl:mt-28 w-[464px] mt-12 gap-8 max-sm:w-80 max-sm:mt-10">
          <Logotipo className="w-72 max-sm:w-56" />

          <div className="flex flex-col gap-6 w-full">
            <p className="text-white font-sans font-light text-lg max-sm:text-base max-sm:text-justify">
              Music Relax é o projeto instrumental de{' '}
              <strong className="font-semibold">Felippe Donatto</strong>, criado
              para quem busca harmonia e inspiração. Com melodias envolventes e
              suaves, a guitarra se torna um portal para a paz.
            </p>

            <ul className="flex gap-8">
              <li>
                <Link href="#" target="_blank">
                  <Instagram className="size-6" />
                </Link>
              </li>

              <li>
                <Link href="#" target="_blank">
                  <Spotify className="size-6" />
                </Link>
              </li>

              <li>
                <Link href="#" target="_blank">
                  <Youtube className="size-6" />
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
