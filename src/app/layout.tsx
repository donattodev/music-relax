import '../styles/globals.css'
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Navbar } from '@/elements/navbar'
import { ProviderAuth } from '@/provider/provider'
import { Analytics } from '@vercel/analytics/react'
import { Roboto, Bai_Jamjuree as Bai } from 'next/font/google'
import { ThemeProvider } from '@/components/themes/theme-provider'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
})

const bai = Bai({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-bai',
})

export const metadata: Metadata = {
  title: 'Music Relax',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} ${bai.variable} element  bg-assets bg-cover bg-no-repeat font-sans antialiased`}
      >
        <ProviderAuth>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <main className="my-12 flex w-full flex-col items-center justify-center gap-8 max-lg:px-6">
              <Navbar />
              {children}
              <Analytics />
            </main>
          </ThemeProvider>
        </ProviderAuth>
      </body>
    </html>
  )
}
