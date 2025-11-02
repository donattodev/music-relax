import { Box } from '@/components/ui/box'
import { Card } from '@/components/ui/card'
import { Text } from '@/components/ui/text'
import { databaseMusic } from '@/data/database-music'
import Link from 'next/link'
import { useRef, useState } from 'react'

export function TopArtists() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollStart, setScrollStart] = useState(0)

  const handleDragStart = (pageX: number) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setStartX(pageX)
    setScrollStart(scrollRef.current.scrollLeft)
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  const handleDragMove = (pageX: number) => {
    if (!isDragging || !scrollRef.current) return
    const delta = pageX - startX
    scrollRef.current.scrollLeft = scrollStart - delta
  }

  return (
    <Box className="col-span-4 flex flex-col w-full gap-8 max-sm:col-span-6">
      <div className="flex justify-between w-full">
        <Text className="font-semibold">Top Artists</Text>
        <Link href="/" className="text-neutral-500 text-sm">
          Ver todos
        </Link>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-2 w-full overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-500 cursor-grab active:cursor-grabbing select-none"
        onMouseDown={e => handleDragStart(e.pageX)}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onMouseMove={e => handleDragMove(e.pageX)}
        onTouchStart={e => handleDragStart(e.touches[0].pageX)}
        onTouchMove={e => handleDragMove(e.touches[0].pageX)}
        onTouchEnd={handleDragEnd}
      >
        {databaseMusic
          .slice(0, 5)
          .map(({ id, artists, album, url_album_minimal }) => (
            <Card.Root key={id}>
              <Card.Cover
                url={url_album_minimal}
                alt={`Capa do álbum ${album}`}
                src={url_album_minimal}
                draggable={false}
              />

              <Card.Artist artist={artists.join(', ')} album={album} />
            </Card.Root>
          ))}
      </div>
    </Box>
  )
}
