import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

const options = {
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

const handler = NextAuth(options)

export default handler

export const getServerSideProps = async (context) => {
}

export const apiHandler = async (req, res) => {
}
