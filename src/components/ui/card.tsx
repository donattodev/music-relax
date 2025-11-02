import Image from 'next/image'
import type { ComponentProps, ReactNode } from 'react'
import { Text } from './text'

type RootCardProps = ComponentProps<'div'> & {
  children: ReactNode
}

export function Root({ children, ...props }: RootCardProps) {
  return (
    <div className="flex flex-col gap-4 w-[134px]" {...props}>
      {children}
    </div>
  )
}

type CoverCardProps = ComponentProps<typeof Image> & {
  url: string
}

export function Cover({ url, ...props }: CoverCardProps) {
  return (
    <>
      {url ? (
        <Image
          {...props}
          src={url}
          alt=""
          width={150}
          height={150}
          className="size-32 rounded-md"
        />
      ) : (
        <div className="size-32 bg-background-950 rounded-md" />
      )}
    </>
  )
}

type ArtistCardProps = ComponentProps<'div'> & {
  artist: string
  album: string
}

export function Artist({ artist, album }: ArtistCardProps) {
  return (
    <div className="text-center flex flex-col">
      <Text size="md">
        <span className=" font-bold">{artist}</span>
      </Text>
      <Text>
        <span className="text-primary font-bold"> {album}</span>
      </Text>
    </div>
  )
}

export const Card = {
  Root: Root,
  Cover: Cover,
  Artist: Artist,
}
