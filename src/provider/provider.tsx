'use client'

import { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

interface ProviderProps {
  children: ReactNode
}

export function ProviderAuth({ children }: ProviderProps) {
  return (
    <div>
      <SessionProvider>{children}</SessionProvider>
    </div>
  )
}
