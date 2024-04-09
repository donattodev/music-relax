import NextAuth from 'next-auth/next'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Adicione outros provedores aqui, se necessário
  ],
  pages: {
    signIn: '/', // Página onde os usuários devem ser redirecionados para fazer login
  },
}

export default NextAuth(options)
