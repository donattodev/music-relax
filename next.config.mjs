/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
}

module.exports = {
  ...nextConfig,
  env: {
    NEXTAUTH_SECRET: 'your-secret-string-here',
  },
}
