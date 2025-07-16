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
        source: '/coursera-events',
        destination: 'http://localhost:3001',
      },
      {
        source: '/coursera-events/:path*',
        destination: 'http://localhost:3001/:path*',
      },
    ]
  }
}

export default nextConfig
