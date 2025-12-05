/** next.config.mjs */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sosc.org.in",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
