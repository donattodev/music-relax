import { Box } from '@/components/ui/box'
import { Card } from '@/components/ui/card'
import { Text } from '@/components/ui/text'
import { databaseMusic } from '@/data/database-music'
import Link from 'next/link'
import { useRef } from 'react'

export function TopArtists() {
  const scrollRef = useRef<HTMLDivElement>(null)
  let isDown = false
  let startX = 0
  let scrollLeft = 0

  const onMouseDown = (e: React.MouseEvent) => {
    isDown = true
    startX = e.pageX - (scrollRef.current?.offsetLeft ?? 0)
    scrollLeft = scrollRef.current?.scrollLeft ?? 0
    if (scrollRef.current) scrollRef.current.classList.add('active')
  }

  const onMouseLeave = () => {
    isDown = false
    if (scrollRef.current) scrollRef.current.classList.remove('active')
  }

  const onMouseUp = () => {
    isDown = false
    if (scrollRef.current) scrollRef.current.classList.remove('active')
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - (scrollRef.current?.offsetLeft ?? 0)
    const walk = (x - startX) * 2 
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <Box className="col-span-4 flex flex-col w-full gap-8 max-sm:col-span-6">
      <div className="flex justify-between w-full">
        <Text className=" font-semibold">Top Artists</Text>
        <Link href="/" className="text-neutral-500 text-sm">
          Ver todos
        </Link>
      </div>

      <div
        ref={scrollRef}
        className="flex max-sm:overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-500 cursor-pointer gap-2 w-full"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {databaseMusic.map(({ id, artists, album, url_album }) => (
          <Card.Root key={id}>
            {url_album ? (
              <div className="size-32 rounded-md bg-neutral-800 animate-pulse" />
            ) : (
              <Card.Cover
                url={url_album}
                alt={`Capa do álbum ${album}`}
                src={`${url_album}`}
              />
            )}
            <Card.Artist artist={artists.join(', ')} album={album} />
          </Card.Root>
        ))}
      </div>
    </Box>
  )
}
