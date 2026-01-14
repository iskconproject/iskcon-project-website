/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["next-international", "international-types"],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
