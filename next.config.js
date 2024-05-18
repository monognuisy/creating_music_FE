/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
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
  output: 'standalone',
};
// hostname: "creating-music.s3.ap-northeast-2.amazonaws.com",
module.exports = nextConfig;
