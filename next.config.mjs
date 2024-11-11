/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'downloads.ctfassets.net',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'videos.ctfassets.net',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'jaybro.vercel.app',
        port: ''
      }
    ],
  },
};

export default nextConfig;