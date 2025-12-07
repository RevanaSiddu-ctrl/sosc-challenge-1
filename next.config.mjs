/** next.config.mjs */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sosc.org.in",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
