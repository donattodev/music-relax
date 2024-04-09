'use client'

import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'

export function SignInButton() {
  const { data: session } = useSession()
  return (
    <div className="flex items-center gap-4">
      {session ? (
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => signOut()}
            className="font-bold uppercase"
          >
            Sair
          </button>
          <Image
            src={session?.user?.image || ''}
            width={120}
            height={120}
            className="h-10 w-10 rounded-full border-2 border-pink-500"
            alt=""
          />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => signIn('google')}
          className="font-bold uppercase"
        >
          Login
        </button>
      )}
    </div>
  )
}
