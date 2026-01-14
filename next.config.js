/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["next-international", "international-types"],
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
