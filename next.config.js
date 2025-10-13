/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/three',
        destination: '/three/index',
      },
    ]
  }
}

module.exports = nextConfig