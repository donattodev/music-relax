import type { Metadata } from 'next'
import { Montserrat, Oxanium } from 'next/font/google'
import type { ReactNode } from 'react'
import '../styles/globals.css'

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
  title: 'Music Relax',
  generator: 'Next.js',
  applicationName: 'Music Relax',
  description:
    'Music Relax é o projeto instrumental de Felippe Donatto, criado para quem busca harmonia e inspiração. Com melodias envolventes e suaves, a guitarra se torna um portal para a paz.',
  creator: 'Felippe Donatto',
  authors: [{ name: 'Felippe Donatto', url: 'https://donattodev.com.br' }],
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'tailwind Css V4',
    'Tailwind Css',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      lang="pt-br"
      className={`${oxanium.variable} ${montserrat.variable} font-sans antialiased`}
    >
      <body>
        {children}
      </body>
    </html>
  )
}
