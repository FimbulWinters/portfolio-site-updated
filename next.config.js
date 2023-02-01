const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
