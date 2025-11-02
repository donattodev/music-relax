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
  title: 'Music Relax',
  description: '',
  category: '',
  creator: '',
  keywords: ['', '', ''],
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
