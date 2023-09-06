/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    pageDataCollectionTimeout: 9000, // Aumenta el tiempo de espera según sea necesario
  },
};

module.exports = nextConfig;
