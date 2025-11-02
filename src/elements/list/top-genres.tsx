import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { databaseMusic } from '@/data/database-music'
import Link from 'next/link'

export function TopGenres() {
  const genresToShow = databaseMusic.slice(0, 5)
  const total = genresToShow.length

  return (
    <Box className="col-span-2 flex flex-col gap-8 max-sm:hidden">
      <div className="flex justify-between w-full">
        <Text>Genres</Text>
        <Link href="/" className="text-neutral-500 text-sm">
          Ver todos
        </Link>
      </div>

      <ul className="grid grid-cols-2 gap-4 w-full">
        {genresToShow.map(({ id, genres }, index) => {
          const isLast = index === total - 1
          const isOdd = total % 2 !== 0
          const shouldSpanFull = isOdd && isLast

          const colors = [
            'bg-blue-500',
            'bg-pink-500',
            'bg-primary',
            'bg-green-500',
            'bg-orange-500',
            'bg-purple-500',
            'bg-teal-500',
          ]

          const bgColor = colors[index % colors.length]

          return (
            <li
              key={id}
              className={`${bgColor} ${
                shouldSpanFull ? 'col-span-2' : ''
              } text-white w-full flex items-center justify-center rounded-md px-6 py-4`}
            >
              <span>{genres}</span>
            </li>
          )
        })}
      </ul>
    </Box>
  )
}
