import { Box } from '@/components/ui/box'
import {
  ListMusic,
  Play,
  Repeat2,
  SkipBack,
  SkipForward,
  X,
} from 'lucide-react'

export function PlayerHome() {
  return (
    <Box className="col-span-4 px-0 py-0 flex flex-col justify-between max-sm:col-span-6">
      <div className="flex flex-col items-center justify-start gap-6 p-5 w-full">
        <div className="flex justify-between w-full">
          <span>Player</span>
          <ListMusic className="cursor-pointer" />
        </div>

        <div className="flex flex-col gap-6 text-center w-full items-center">
          <div className="w-full h-56 rounded-md bg-neutral-800 animate-pulse max-sm:hidden" />
          <hgroup className="flex flex-col gap-2">
            <h2 className="text-[28px] font-bold">City crazy</h2>
            <h3 className="text-sm font-bold">Felippe Donatto</h3>
            <h3 className="text-sm text-primary font-bold">City Crazy</h3>
          </hgroup>

          <div className="w-[280px] gap-4 flex items-center justify-between ">
            <div>0:00</div>
            <div className="h-[2px] w-full bg-neutral-500 flex" />
            <div>2:33</div>
          </div>
        </div>
      </div>

      <div className="bg-primary flex items-center justify-center w-full py-5">
        <ul className="flex items-center gap-8">
          <li>
            <Repeat2 />
          </li>

          <li>
            <SkipBack />
          </li>

          <li className="bg-white size-14 flex items-center justify-center rounded-md">
            <Play className="text-primary" />
          </li>

          <li>
            <SkipForward />
          </li>

          <li>
            <X />
          </li>
        </ul>
      </div>
    </Box>
  )
}
