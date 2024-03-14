import Image from 'next/image'
import { Heart } from 'lucide-react'
import foto from '../../../public/image1.jpg'
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
              <Heart className="w-5 text-[#047A95]" />
            </div>
          </div>
        </div>

        <div>
          <Image
            src={foto}
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
              <Heart className="w-5 text-[#047A95]" />
            </div>
          </div>
        </div>
      </div>

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
