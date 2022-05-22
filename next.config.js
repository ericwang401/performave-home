/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tailwindui.com', 'images.unsplash.com', 'cdn.discordapp.com', 'camo.githubusercontent.com', 'imgur.com'],
  },
}

module.exports = nextConfig
