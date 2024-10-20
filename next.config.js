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
      {
        // 랜덤 이미지용 url
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/*"
      }
    ],
  },
  output: "standalone",
};

module.exports = nextConfig;
