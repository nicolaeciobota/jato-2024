/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['ucarecdn.com', 'images.unsplash.com'],
  },
  // Custom server configuration
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
  // Development server options
  devIndicators: {
    buildActivity: true,
  },
};

module.exports = nextConfig;
