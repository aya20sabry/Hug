/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.upnq8.com",
        pathname: "/serviceImg/**",
      },
    ],
  },
};

module.exports = nextConfig;
