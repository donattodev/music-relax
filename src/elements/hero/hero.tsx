import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { LikeHeroHeart } from '../like/like-hero-heart'
import { Topbar } from '../navs/topbar'

export function Hero() {
  return (
    <header className="bg-[url(../assets/hero/hero-cover.png)] bg-cover h-96 w-full">
      <Topbar />

      <div className="px-6 pb-8 pt-20 flex flex-col gap-6">
        <div>
          <Heading size="lg">Reborn</Heading>
          <Text size="md" className="font-semibold">
            Felippe Donatto <strong className="text-primary">Reborn</strong>
          </Text>
        </div>

        <div className="flex items-center gap-5">
          <Button>Ver álbum completo</Button>
          <LikeHeroHeart />
        </div>
      </div>
    </header>
  )
}
