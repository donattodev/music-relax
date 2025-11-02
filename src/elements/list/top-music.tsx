import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { databaseMusic } from '@/data/database-music'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const formatDuration = (seconds: number) => {
  const min = Math.floor(seconds / 60)
  const sec = String(seconds % 60).padStart(2, '0')
  return `${min}:${sec}`
}

export function TopMusic() {
  return (
    <Box className="col-span-2 flex flex-col gap-8 max-sm:col-span-6">
      <div className="flex justify-between w-full">
        <Text>Top music</Text>
        <Link href="/" className="text-neutral-500 text-sm">
          Ver todos
        </Link>
      </div>

      <ul className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-4 w-full">
          {databaseMusic
            .slice(0, 3)
            .map(({ id, artists, album, url_album, duration }) => (
              <li className="flex justify-between w-full h-16" key={id}>
                <div className="flex items-center gap-3">
                  {url_album ? (
                    <div className="size-12 rounded-md bg-neutral-800 animate-pulse" />
                  ) : (
                    <Image
                      src={url_album}
                      width={100}
                      height={100}
                      className="size-12 rounded-md"
                      alt=""
                    />
                  )}

                  <div className="flex flex-col">
                    <span>{album}</span>
                    <span className="text-xs text-primary">{artists}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-bold text-sm text-background-500">
                    {formatDuration(duration)}
                  </span>
                  <div className="bg-background-700 size-6 rounded-xs flex items-center justify-center">
                    <Plus className="w-4 text-primary" />
                  </div>
                </div>
              </li>
            ))}
        </div>
      </ul>
    </Box>
  )
}
