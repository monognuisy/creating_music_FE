/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*",
        pathname: "/**/*",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "showpang.org",
        pathname: "/images/**",
      },
    ],
  },
  output: "standalone",
};

module.exports = nextConfig;
