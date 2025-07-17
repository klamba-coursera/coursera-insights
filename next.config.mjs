/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Add rewrites to handle external project navigation
  async rewrites() {
    return [
      {
        source: '/events-with-images',
        destination: 'http://localhost:3001',
      },
      {
        source: '/events-with-images/:path*',
        destination: 'http://localhost:3001/:path*',
      },
      {
        source: '/coursera-community',
        destination: 'http://localhost:3002',
      },
      {
        source: '/coursera-community/:path*',
        destination: 'http://localhost:3002/:path*',
      },
      {
        source: '/success-stories',
        destination: 'http://localhost:3003',
      },
      {
        source: '/success-stories/:path*',
        destination: 'http://localhost:3003/:path*',
      },
      {
        source: '/live-event',
        destination: 'http://localhost:3004',
      },
      {
        source: '/live-event/:path*',
        destination: 'http://localhost:3004/:path*',
      },
    ]
  }
}

export default nextConfig
