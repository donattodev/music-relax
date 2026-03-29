import type { ReactNode } from 'react'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Music Relax | Portfólio Felippe Donatto',
  description:
    'Music Relax é um projeto de streaming de música do portfólio de Felippe Donatto (Donatto Dev). Explore músicas relaxantes com uma interface premium e moderna.',
  category: 'music',
  creator: 'Felippe Donatto (Donatto Dev)',
  authors: [{ name: 'Felippe Donatto', url: 'https://donattodev.com.br' }],
  publisher: 'Donatto Dev',
  keywords: [
    'Music Relax',
    'Felippe Donatto',
    'Donatto Dev',
    'Portfólio',
    'Streaming de Música',
    'UI/UX Design',
    'Next.js',
    'React',
    'Desenvolvedor Frontend',
    'Trilha Sonora Relaxante',
  ],
  openGraph: {
    title: 'Music Relax | Portfólio Felippe Donatto',
    description:
      'Explore o projeto Music Relax, uma experiência premium de streaming de música criada por Felippe Donatto.',
    url: 'https://music-relax.vercel.app',
    siteName: 'Music Relax',
    locale: 'pt-BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Music Relax | Portfólio Felippe Donatto',
    description:
      'Projeto de streaming de música do portfólio de Felippe Donatto (Donatto Dev).',
    creator: '@donattodev',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-br" className={`${inter.variable} font-sans`}>
      <body className="bg-neutral-900 text-white ">{children}</body>
    </html>
  )
}
