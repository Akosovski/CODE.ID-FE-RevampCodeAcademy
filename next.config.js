/** @type {import('next').NextConfig} */
module.exports =
{
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
      },
    ],
  },
  reactStrictMode: true,
}