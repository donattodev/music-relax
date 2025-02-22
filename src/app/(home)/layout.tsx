import type { ReactNode } from 'react'
import { Player } from '@/components/player/player'

export default function HomeLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <main className="bg-gradient-to-r to-primary from-primary-900 ">
      {children}
      <Player />
    </main>
  )
}
