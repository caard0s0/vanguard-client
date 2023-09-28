/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  env: {
    HTTP_SERVER_ADDRESS: process.env.HTTP_SERVER_ADDRESS,
  },
}

module.exports = nextConfig
