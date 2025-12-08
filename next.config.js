/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sosc.org.in",
      },
      {
        protocol: "https",
        hostname: "sosc.org.in/_astro/**",
      }
    ],
  },
};

module.exports = nextConfig;
