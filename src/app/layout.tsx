import type { Metadata } from 'next'
import { Montserrat, Oxanium } from 'next/font/google'
import type { ReactNode } from 'react'
import '../styles/globals.css'
import { Player } from '@/components/player/player'

const oxanium = Oxanium({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-oxanium',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Music relax',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    // biome-ignore lint/a11y/useValidLang: <explanation>
    <html lang="pt-br" className={`${oxanium.variable} ${montserrat.variable} font-sans antialiased`}>
      <body className="bg-gradient-to-r to-primary from-primary-900 ">
        {children}
        <Player />
      </body>
    </html>
  )
}
