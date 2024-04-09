// src/app/api/auth/[...nextauth]/route.js

import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/',
  },
}

// pages/api/auth/[...nextauth].js

import { NextAuth } from './route'
import { authOptions } from './route'

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }